## About

GitHub Action to expose GitHub runtime to the workflow.

This is a simplified version of [crazy-max/ghaction-github-runtime](https://github.com/crazy-max/ghaction-github-runtime), which does not use a build process so it can be easily reasoned about.

## Usage

```yaml
name: build

on:
  push:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      -
        name: Export Actions Env
        uses: wankdanker/export-actions-env
      -
        name: Env
        run: |
          # ACTIONS_RUNTIME_TOKEN, ACTIONS_RUNTIME_URL should be exposed
          env|sort
```

## License

MIT. See `LICENSE` for more details.
