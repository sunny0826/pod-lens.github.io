# Kubectl Pod LensWebsite

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

[![Netlify Status](https://api.netlify.com/api/v1/badges/4e958759-6e9e-4c87-be89-4cb60e3036a0/deploy-status)](https://app.netlify.com/sites/kubectl-pod-lens/deploys)

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
