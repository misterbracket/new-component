# Create New React Component CLI

## Usage

Run `npx @maxklammer/new-component help` to see the available commands.

```
$ npx @maxklammer/new-component <component-name> [option]

   COMMANDS

  help You can use `npx @maxklammer/new-component <component-name>` from the command line.

   OPTIONS

  -dir, --directory  The directory structure to create the component in Default: src/components
  -js, --javascript  Create a JaveScript component Default: false
  -c, --clear        Clear the console Default: true
  --noClear          Don't clear the console Default: false
  -d, --debug        Print debug info Default: false
  -v, --version      Print CLI version Default: false


```

## Local Installation

Run `npm install` to install the package.

Then run `npm link` create a global link to the package.

You can now run `new-component` from anywhere.

Alternativly, try running `npx @maxklammer/new-component <ComponentName>` from the command line.
