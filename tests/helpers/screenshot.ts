import {expect, Locator, Page} from "@playwright/test";
import {PageAssertionsToHaveScreenshotOptions} from "playwright/types/test";

/**
 * Opens `url` in the browser `page`, and takes multiple screenshots of the
 * page in the configured browsers.
 *
 * @remarks
 *
 * Two sets of screenshots are taken for each configured browser.
 *
 * The first set consists of 1 screenshot capturing the full page at whatever
 * height is necessary to show all the content.
 *
 * The second set consists of 1-N screenshots; the viewport size is set to
 * a reasonable size for the device, a screenshot is taken at the top of
 * the page, and the browser goes down one page. If going down a page shows
 * more content a new screenshot is taken. This continues until the entire
 * page has been captured in potentially multiple screenshots.
 *
 * @param page - The browser page to use.
 * @param url - The URL to screenshot.
 */
export async function screenshotUrl(page: Page, url: URL) {
    await page.goto(url.toString())

    // The page may contain animated GIFs. If it does they mess with the
    // screenshots, as you can't guarantee what frame will be playing when
    // the screenshot is taken.
    //
    // To fix this, evaluate this script into the page. It finds all .gif
    // image elements and replaces them with a canvas element containing
    // the first frame of the GIF.
    await page.evaluate(() => {
        // [].slice.apply(document.images).filter(isGif).map(replaceGif);
        Array.from(document.images).filter(isGif).map(replaceGif)

        function isGif(img: HTMLImageElement) {
            return /^(?!data:).*\.gif/i.test(img.src);
        }

        function replaceGif(img: HTMLImageElement) {
            const canvas = document.createElement('canvas');
            const width = canvas.width = img.width;
            const height = canvas.height = img.height;
            canvas.getContext('2d').drawImage(img, 0, 0, width, height);

            try {
                img.src = canvas.toDataURL("image/gif");
            } catch (e) {
                for (const attribute of img.attributes) {
                    canvas.setAttribute(attribute.name, attribute.value)
                }
                img.parentNode.replaceChild(canvas, img);
            }
        }
    })

    const screenshotDir = url.pathname.split('/');

    await expectScreenshotWithRetries(page, [...screenshotDir, 'full.png'], {fullPage: true});

    // Take a screenshot at the top of the page, then page down. If there is more
    // content take another screenshot. Repeat this until there is no more content.
    //
    // This is belt and braces -- in most cases a screenshot of the full page is
    // sufficient, but some CSS errors may only be apparent in shorter viewports.
    //
    // This also tests things like whether or not headers or other elements stick
    // to the top of the page as expected.
    //
    // And for changes that only affect part of the page without changing the
    // vertical height it limits the number of new screenshots to produce.
    let pageCount = 0;

    /** Number of pixels the document is scrolled vertically. */
    let scrollY = await page.evaluate(() => window.scrollY);
    let prevScrollY = -1;

    /** Height (px) of the visible viewport. */
    const visualHeight = await page.evaluate(() => document.documentElement.clientHeight);

    /** Total height (px) of the viewport. */
    const layoutHeight = await page.evaluate(() => document.documentElement.scrollHeight);

    // Scroll down the page, taking screenshots of each page.
    while (scrollY + visualHeight < layoutHeight) {
        await expectScreenshotWithRetries(page, [...screenshotDir, `page${pageCount + 1}.png`]);
        pageCount++;
        prevScrollY = scrollY;

        // The next line scrolls the page by exactly the visible viewport height.
        // This is not the same as the user pressing "Page Down", as "Page Down"
        // does not move the content an entire page. If it did content that was
        // just off the bottom of viewport before would then be under the sticky
        // header afterwards.
        //
        // This is kept here as a possible discussion point and an example of how
        // to scroll by exactly the viewport height...
        // await page.evaluate(() => window.scroll(0, window.scrollY + document.documentElement.clientHeight));

        // ... but using PageDown here is almost certainly better.
        await page.keyboard.press('PageDown');

        scrollY = await page.evaluate(() => window.scrollY);
    }
}


// - Fix for https://github.com/microsoft/playwright/pull/36234
// - Name param is to work around an issue where a number could be appended
//   to the auto-generated name (so "homepage" becomes "homepage-1", maybe
//   "homepage-2", etc). Passing an explicit name appears to fix that.
async function expectScreenshotWithRetries(
    element: Page | Locator,
    name: string | ReadonlyArray<string>,
    options?: PageAssertionsToHaveScreenshotOptions
) {
    let maxAttempts = 5

    let lastError: Error | null = null

    for (let attempt = 0; attempt <= maxAttempts; attempt++) {
        try {
            return await expect(element).toHaveScreenshot(name, options)
        } catch (error) {
            lastError = error
            console.warn(
                `Screenshot attempt ${attempt} failed: `,
                error instanceof Error ? error.message : error
            )
            if (attempt == maxAttempts) break;

            await new Promise(resolve => setTimeout(resolve, 1000))
        }
    }

    throw lastError || new Error("Screenshot failed after $maxAttempts")
}