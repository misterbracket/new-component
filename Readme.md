# Create New React Component CLI

This will help you to quickly create a new React component folder. It will create a basic component file and a test folder in the same directory.
The resulting filestructure will look like this:

```
└── Button
    ├── Button.tsx
    ├── __test__
    │   └── Button.test.tsx
    └── index.ts
```

By default it will try to create the components in the `src/components` directory. If your project has a different structure, you can specify the path to the components directory by passing the `--directory` flag.

## Usage

You can run the package by either using npx or installing it globally.

### NPX

To run it with npx run `npx @maxklammer/new-component help` to see the available commands.

```
$ npx @maxklammer/new-component <component-name> [option]

   COMMANDS

  help  Create the a folder structure for a new component e.g. new-component Button

   OPTIONS

  --directory    The directory structure to create the component in Default: src/components
  --javascript   Create a JaveScript component Default: false
  -v, --version  Print CLI version Default: false

```

### Local Installation

Run `npm install -g @maxklammer/new-component` to install the package.

You can now run `new-component` from anywhere.

## Credits

This package was heavily inspired by Josh Comeau's [new-component](https://github.com/joshwcomeau/new-component) package. Check out his package for some more options.
