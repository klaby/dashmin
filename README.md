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

To get started, create your application using the `create-react-app`.
```
create-react-app example
```

### Install

After creating the application using `create-react-app` enter the project folder, open the terminal and install the` dashmin`.

```
yarn add dashmin
```
#### or
```
npm i dashmin
```

## &#10003; Structure
```bash
├── node_modules
├── src
│   ├── components
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

To begin, delete all files inside `src /`, leaving only `index.js` and` app.js`. after doing so create two new `pages` and` routes` folders.

```bash
├── node_modules
├── src
│   ├── views
│   ├── routes
│   ├── app.js
│   ├── index.js
├── package.json
```

#### pages/example.js

Within the `pages` directory create your view component to be rendered.

```js
// Imports
import React from 'react';

// Products
const Example = () => (
  <div>
    <h1>Example</h1>
  </div>
);

export default Example;
```

#### routes/index.js

Shortly after creating your view component create a route file by passing the following properties.

```js
// Pages
import Example from '../pages/example';

// Routes
const Routes = [
  {
    route: '/',
    name: 'Home',
    icon: 'fas fa-tachometer-alt',
    page: Example,
  },
]

export default Routes;
```

The sidebar will be created automatically via the routes so set `icon` and` name` to the button.


#### app.js

Now to finish .. after you have done all the steps above, just import `Dashmin` and `routes` and use it!

```js
// Imports
import React from 'react';
import Dashmin from 'dashmin'

// Routes
import routes from './routes';

const App = () => (
  <Dashmin
    brand={{ max: 'D A S H M I N', min: 'dmin' }}
    routes={routes}
  />
);

export default App;
```

For more exexmplos you can check https://github.com/hiukky/dashmin-react/tree/demo.

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

## &#10003; Libraries
<div>
The entire Dashmin database was created from 0! <strong>Bootstrap</strong> is included in order to facilitate our life in the development of the main content, example (the use of the grids system).
The icons are the property of <strong>Fontawesome</strong>! ; )
</div>
<br>
<p>&#10004; <a href="https://getbootstrap.com/"> Bootstrap </a></p>
<p>&#10004; <a href="https://fontawesome.com/"> Fontawesome </a></p>

## &#10003; License

MIT © [Romullo](https://github.com/hiukky)
