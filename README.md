<div align="center">
    <img src="https://github.com/hiukky/dashmin-react/blob/master/logo.png" width="300x300" height="300" />
    <h1> ... DASHmin ... </h1>
</div>

<div align="center">
  <img src="https://travis-ci.org/hiukky/dashmin-react.svg?branch=master">
</div>

<div align="center">
  <sub>Built with ❤︎ by
  <a href="https://github.com/hiukky">Romullo</a>
  <br><br>
</div>

DASHmin is only a base for the development of your Administrative System! it still (still ;) .. does not have a range of components, but is well on the way to help you in development! By default Bootstrap is already included, if you know the basics of it,easily create your pages!

If you want to create your admin using DASHmin, follow the installation tutorial below!

## &#10003; Requirements

To run this project, you need to have <strong>Node.js</strong> installed on your machine! If you do not have it, go to the website https://nodejs.org/en/ and download and install it as it is taught in the documentation!


## &#10003; Instalation
```
git clone https://github.com/hiukky/dashmin-react.git
```

### Install
```
yarn install
```
#### or
```
npm install
```

## &#10003; Structure
```bash
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
├── src
│   ├── app
│   ├── assets
│   ├── components
│   ├── pages
│   ├── routes
│   ├── store
│   ├── dashmin.js
│   ├── index.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .travis.yml
├── package.json
├── README.md
├── LICENCE.md
├── logo.png
└── dashmin.png
```
## &#10003; How to use

Dashmin is just a basic interface to help you in creating your admin dashboard. After you download and install the dependencies, you can start your application.


### Configuring the Sidebar

To get started, you may be going to the `src/dashmin.js` file and dropping basic information in the sidebar as` Brand` and `Buttons`.

#### Brand

```js
  <Sidebar
    // Brand
    brand={{
      max: 'D A S H M I N',
      min: 'dmin',
    }}
  />
```

#### Buttons

To define your buttons in the sidebar, you need to use the `buttons` property and pass an array of objects with their buttons, informing an id for the` Id` button, the name `name`, icone` icon` and the route to which it should reference `route`.

```js
  <Sidebar
    // Buttons
    buttons={[
      {
        id: 1,
        name: 'Dashboard',
        icon: 'fas fa-tachometer-alt',
        route: '/',
      },
    ]}
  />
```

### Creating the Pages

To create your pages simply go to the `src/pages` directory and create your pages.

#### pages/example.js

```js
// Imports
import React from 'react';

// Example
const Example = () => (
  <div>
    <Title>Example</Title>
  </div>
);
export default Example;
```

And then immediately import them into the index file in `pages/index.js`.

#### pages/index.js

```js
// Pages
import Example from './example';

const pages = ({
  Example,
});

export default pages;
```

### Creating the Routes

Finally, define the routes of the application in `routes/index.js`.

#### routes/index.js

```js

// Pages
import pages from '../pages';

// Routes
const Routes = [
  {
    route: '/',
    page: pages.Example,
  },
];

export default Routes;
```

### Finishing

After you have followed the steps above, you can now test your application using one of the commands below.

```
yarn run start
```
#### or
```
npm run start
```

Ready!! if everything went well, just check your application in the browser http://127.0.0.1:3000/.

## &#10003; Preview
<p>&#10004; <a href="https://hiukky.github.io/dashmin-react/"> Demo </a></p>

<img src="https://github.com/hiukky/dashmin-react/blob/master/dashmin.png" />

## &#10003; Frameworks
<div>
The entire Dashmin database was created from 0! <strong>Bootstrap</strong> is included in order to facilitate our life in the development of the main content, example (the use of the grids system).
The icons are the property of <strong>Fontawesome</strong>! ; )
</div>
<br>
<p>&#10004; <a href="https://getbootstrap.com/"> Bootstrap </a></p>
<p>&#10004; <a href="https://fontawesome.com/"> Fontawesome </a></p>

## &#10003; License

MIT © [Romullo](https://github.com/hiukky)
