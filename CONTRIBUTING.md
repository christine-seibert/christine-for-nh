# Contributing

We'd love to accept your patches and contributions to this project.

## Development Environment

If you are contributing Christine for NH content (rather than code) and want to be able to view it,
the easiest way to do so in your browser is to run it locally.

We use [Cloudflare Pages][1] to make this documentation available, and [Material MkDocs][2] to build
the site.

If you have [Docker][3] and [just][4] installed, clone this repository and run the `just` command
at the root of the repository. This script does two things:

- It builds the provided Docker image (unless you already have it) and tags it as the latest.
- It runs the `christine-for-nh:latest` image.

The development server uses port 8000; point your web browser to `http://localhost:8000`, and you
should see the site.

### Commands

`just` commands are defined in the `justfile` at the root of the repository and provide the
following commands:

- build
- serve
- serve-detached
- start
- stop
- clean

!!! note

    The default `just` command executes both `just build` and `just serve` for convenience.
    Both `just start` and `just stop` are to be used when you want to run detached from the
    command line. `just start` executes both `just build` and `just serve-detached` for
    convenience. `just clean` will clean up all docker artifacts (containers and images).

### Hot reloading

The development server recognizes when files change (including static files), and local changes will
be automatically reflected in your browser upon reloading.

## Commits

We use the [Conventional Commits][5] standard for all commits.

## Code reviews

All submissions, including submissions by project members, require review. We use GitHub pull
requests for this purpose. Consult
[GitHub Help][6]
for more information on using pull requests.

### Formatting

We use [editorconfig][7] and [prettier][8] to format Markdown, JavaScript, and (most) HTML to
ensure a consistent style throughout our source. You can add prettier as a plugin in most
development environments.

### Linting

We use [markdownlint][9] to lint Markdown to ensure proper Markdown is used throughout our source.

> You can add markdownlint as a plugin in most development environments.

### More Details

Read the `CONTRIBUTING.md` and `README.md` files at the root of this project for more details for
any questions you may have.

[1]: https://developers.cloudflare.com/pages/
[2]: https://squidfunk.github.io/mkdocs-material/
[3]: https://docker.com/
[4]: https://just.systems/man/en/chapter_4.html
[5]: https://www.conventionalcommits.org/en/v1.0.0/
[6]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
[7]: https://editorconfig.org/
[8]: https://prettier.io/
[9]: https://github.com/DavidAnson/markdownlint
