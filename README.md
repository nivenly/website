# The Nivenly Foundation Resources Website

Here is the static website that is hosted at [nivenly.org](https://nivenly.org).

### Building The Website

Clone the repository

- You must have Go installed to build the site.
  [Go Installation Instructions are here](https://go.dev/doc/install).
  - If you are using macOS you can install Go with `brew`.

```
git clone git@github.com:nivenly/website.git
cd website
make hugo
```

### Running The Website

The site is built with [Hugo](https://gohugo.io/) and also requires Go, as indicated above. [Hugo Installation instructions are
here](https://gohugo.io/installation/) (Note: if you
are using macOS you can install Hugo with `brew`.)

Once you have hugo, run the following command in the root directory of the repository to start the development server.

```
make dev
```

The first time you run the command will take a little bit while it downloads some necessities. Once it's running, the dev site is available at [localhost:1313](http://localhost:1313/).

### Adding a new page to the web site

Due to the choice of theme, using `hugo new` doesn't work quite as expected.
Instead, we recommend making a new file and including the following header at
the top:

```
---
title: "Your Title Goes Here"
linkTitle: "YourLinkTitleGoesHere"
weight: 4
description: >
  Your single or multiline description goes here.
---

Your content goes here.
```

All of our pages are going into English first, but may be
translated into other languages. To create the file in the correct
file path:

1. All content should be in the `content/en`
   parent directory.
1. In order to create a new page for the parent level of the
   left navigation panel, then the file should be in
   `content/en/$NEWPARENTDIR/_index.md`
1. If you are planning to add sub-items to an existing parent
   level menu item, then it should be in
   `content/en/$EXISTINGPARENTDIR/filename.md`
1. Note all `$PARENTDIR` require a minimum of an `_index.md` file.

The `weight` field determines what order the menu items appear on the
nav menu. By default, all files with the same `weight` are
alphabetized. All files added to the parent nav menu should have a
`weight: 4` and all sub-items should have a `weight: 20`.
