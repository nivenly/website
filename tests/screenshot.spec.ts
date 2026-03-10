import {test} from '@playwright/test';
import {urlsFromSitemap} from "./helpers/sitemap";
import {screenshotUrl} from "./helpers/screenshot";

// Note: WebP would be a better format to save in (lossless like PNG, smaller
// than PNG), but is not currently supported: https://github.com/microsoft/playwright/issues/22984

// Generate one test for each URL in the sitemap.
urlsFromSitemap().forEach((url) => {
    test(url.toString(), async ({page}) => await screenshotUrl(page, url))
});
