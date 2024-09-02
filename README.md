# Christine for NH

_Christine for NH_ repository contains the contents and blog for Christine Seibert's Campaign for
the New Hamphsire State House of Representatives.

On every change to the _main_ branch, the __[markdown](https://www.markdownguide.org/)__ under
`/docs` directory is built and deployed as a Cloudflare page to:

- __<https://christine-for-nh.com/>__
>
> Locally changes are applied immediately as files are saved to __<http://localhost:8000/>__

## Getting started

You will need to have the following software installed on your system to run this project locally:

- __[Docker](https://docs.docker.com/get-docker/)__
- __[Just](https://just.systems/)__

If you are on __Windows__, please do the following to install `just`:

- Open a Powershell terminal and execute the following:

  ```powershell
  winget install --id Casey.Just --exact
  ```

If you are on __Ubuntu Linux__, please do the following to install `just`:

- Open a bash terminal and execute the following:

  ```bash
  wget -qO - 'https://proget.makedeb.org/debian-feeds/prebuilt-mpr.pub' | gpg --dearmor | sudo tee /usr/share/keyrings/prebuilt-mpr-archive-keyring.gpg 1> /dev/null
  echo "deb [arch=all,$(dpkg --print-architecture) signed-by=/usr/share/keyrings/prebuilt-mpr-archive-keyring.gpg] https://proget.makedeb.org prebuilt-mpr $(lsb_release -cs)" | sudo tee /etc/apt/sources.list.d/prebuilt-mpr.list
  sudo apt update
  sudo apt install just
  ```

> For other OS's, follow [Just Installation Commands](https://github.com/casey/just?tab=readme-ov-file#packages)

## Build

To __build__ the Docker Image execute the following command:

```bash
just build
```

## Deploy

To __deploy__ the Docker Container locally execute the following command:

1. Execute the following command:

```bash
just serve
```

1. Open __<http://localhost:8000/>__ once you see `Serving on http://0.0.0.0:8000/` in the logs

## Build and Deploy

To __build__ and __deploy__ the Docker Container locally execute the following command:

```bash
just
```

or

```bash
just build serve
```

> Just command defaults to building and serving the project attached to the terminal (`CTRL` + `C` will automatically stop the container).

Open __<http://localhost:8000/>__ once you see `Serving on http://0.0.0.0:8000/` in the docker logs.

## Deploy Detached

To __deploy__ the Docker Container detached from the terminal locally execute the following command:

1. Execute the following command:

```bash
just serve-detached
```

1. Open __<http://localhost:8000/>__ once you see `Serving on http://0.0.0.0:8000/` in the logs

## Build and Deploy Detached

To __build__ and __deploy__ the Docker Container locally execute the following command:

```bash
just start
```

or

```bash
just build serve-detached
```

## Stop Detached Container

To stop the container when running in detached mode, execute the following command:

```bash
just stop
```

## Clean

To stop the container and clean the container and image when running, execute the following command:

```bash
just clean
```

## Contributing

Following the __[Contributing Guide](./CONTRIBUTING.md)__ for how to contribute to this project.

## Credits

- [Markdown](https://www.markdownguide.org/)
- [MarkdownLint](https://github.com/DavidAnson/markdownlint)
- [MkDocs](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [Docker](https://www.docker.com/)
- [GitHub](https://github.com/)
- [Cloudflare Pages](https://developers.cloudflare.com/pages)
