import * as fs from "node:fs";
import {XMLParser} from "fast-xml-parser";

/**
 * Returns a list of URLs in `sitemapPath` (as strings).
 *
 * @remarks
 *
 * While libraries that do this exist, they function asynchronously, meaning
 * they can't be called from the synchronous code that defines each test.
 *
 * @param sitemapPath - Optional path to the sitemap file to process, including
 * the filename. Relative paths are relative to the top-level directory.
 */
export function urlsFromSitemap(sitemapPath: string = 'public/sitemap.xml'): URL[] {
    interface Sitemap {
        urlset: {
            url: { loc: string }[];
        };
    }

    const xml = fs.readFileSync(sitemapPath, {encoding: 'utf-8'});
    const sitemap: Sitemap = new XMLParser().parse(xml);
    return sitemap.urlset.url.map(url => new URL(url.loc));
}
