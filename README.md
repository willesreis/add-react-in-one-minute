# add-react-in-one-minute
I will show how to add a React component to an existing HTML page.
Related [React Doc](https://reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute)

## Minimal React config in index.html
See an example [here](./example-1/index.html)

## Display React components in multiple places in HTML
See an example [here](./example-2/index.html)

## Minimal React config with JSX
See an example [here](./example-3/index.html)

## React with JSX in external script
See an example [here](./example-4/index.html)

Necessary steps, if the */example-4/src/like-button.js* file is edited:
* install **nodejs** and run command: `npm install` to prepare Babel dependencies
* run the next command inside folder */example-4*: `npx babel --watch src/ --out-dir . --presets react-app/dev` 

The file */example-4/like-button.js* will be updated as  source file to React context.
