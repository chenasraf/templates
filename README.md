# Simple Scaffold Templates

## Usage

No need to install anything but Node.

Run these commands to generate scaffolds of various types

```shell
npx simple-scaffold@latest -gh chenasraf/templates#<name>.js -k <key> <name>
```

### Examples

```shell
# react component
npx simple-scaffold@latest -gh chenasraf/templates#react.js -k atom MyButton

# editorfiles (prettier, editorfile, eslintignore, etc)
npx simple-scaffold@latest -gh chenasraf/templates#editorfiles.js -
```

## Available Scaffolds

- **react**  
  Available types: atom, molecule, organism, page, utils\*

  \* Name is ignored, use anything

- **editorfiles**  
  .editorfile, prettier config, and eslintignore

- **github**  
  Generic files for GitHub, regardless of project type - e.g. FUNDING.yml

- **github-pnpm**  
  GitHub workflows and a semantic-release config for new projects.
