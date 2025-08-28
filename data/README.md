# Data files and Schema validation

The `.toml` files in the directories within this directory define the data to show across the website.

TOML was chosen because it's marginally easier to edit than JSON, and doesn't have some of the horrendous problems YAML does.

## Schema Files

The schema files match the name of the directory in which the schema applies, so for `projects/` the scheme file is `projects.schema.json`. Data files are validated against the schema files using `/data/validate.sh`, which can be run via `make validate` (you need the npm dependencies installed first via `npm install`).

## See also

- `layouts/partials/project-card.html`
- `layouts/shortcodes/shared/projects-card-deck.html`