# Projects data

The `.toml` files in this directory define the data to show across the website for different Nivenly projects.

TOML was chosen because it's marginally easier to edit than JSON, and doesn't have some of the horrendous problems YAML does.

## Schema

See `project.schema.json` for the data schema. Data files are validated against this using `/data/validate.sh`, you can also run `make validate`.

## See also

- `layouts/partials/project-card.html`
- `layouts/shortcodes/shared/projects-card-deck.html`