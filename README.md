# Simple Scaffold Templates

A set of generator templates for use with
[Simple Scaffold](https://github.com/chenasraf/simple-scaffold).

## Usage

No need to install anything but Node.

Run these commands to generate scaffolds of various types

```shell
npx simple-scaffold@latest -g chenasraf/templates -k <key> <name>
# list all available templates:
npx simple-scaffold@latest -g chenasraf/templates list
```

### Examples

```shell
# react component
npx simple-scaffold@latest -g chenasraf/templates -k react.atom MyButton

# editorfiles (prettier, editorfile, eslintignore, etc)
npx simple-scaffold@latest -g chenasraf/templates -
```

## Available Scaffolds

- **react**  
  Available types: atom, molecule, organism, page, utils\*

  \* Name is ignored, use anything

- **editorfiles**  
  .editorfile, prettier config, and eslint.config.mjs

- **github**  
  Generic files for GitHub, regardless of project type - e.g. FUNDING.yml

- **github-pnpm**  
  GitHub workflows and a semantic-release config for new projects.
