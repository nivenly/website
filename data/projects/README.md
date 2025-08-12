# Projects data

The `.toml` files in this directory define the data to show across the website for different Nivenly projects.

TOML was chosen because it's marginally easier to edit than JSON, and doesn't have some of the horrendous problems YAML does.

## Schema

There's no schema validation for the files so you have to ensure you use the correct properties and spelling.

- `name`: (Text) The project's name as it should appear in lists, cards, etc.
- `projectUrl`: (URL) Best URL to use when linking to the project in general (e.g., if making `name` a link to the project). May be a full URL, or may be relative to the Nivenly website.
- `logoUrl`: (URL) Best URL to use as the project's logo.
- `description`: (Markdown Text) Long form project description. May contain multiple paragraphs. Will be passed through the `markdownify` filter before use, so can contain Markdown markup.
- `callToAction`: (Text) Short text to use as a call to action for this project.

## See also

- `layouts/partials/project-card.html`
- `layouts/shortcodes/shared/projects-card-deck.html`