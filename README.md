<div align="center">
    <img src="https://github.com/hiukky/dashmin-react/blob/master/logo.png" width="300x300" height="300" />
    <h1> ... DASHmin ... </h1>
</div>

<div align="center">
  <img src="https://travis-ci.org/hiukky/dashmin-react.svg?branch=master">
  <img src="https://img.shields.io/github/issues/hiukky/dashmin-react.svg">
  <img src="https://img.shields.io/github/license/hiukky/dashmin-react.svg">
</div>

<div align="center">
  <sub>Built with ❤︎ by
  <a href="https://github.com/hiukky">Romullo</a>
  <br><br>
</div>

DASHmin is only a base for the development of your Administrative System! it still (still ;) .. does not have a range of components, but is well on the way to help you in development! By default Bootstrap is already included, if you know the basics of it,easily create your pages!

If you want to create your admin using DASHmin, follow the installation tutorial below!

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

## &#10003; How to use

Dashmin is just a basic interface to help you in creating your admin dashboard. After you download and install the dependencies, you can start your application.

To begin, delete all files inside `src/`, leaving only `index.js` and` app.js`. after doing so create two new `views` and` routes` folders.

```bash
├── node_modules
├── src
│   ├── views
│   ├── routes
│   ├── app.js
│   ├── index.js
├── package.json
```

#### views / example.js

Within the `views` directory create your view component to be rendered.

```js
// Imports
import React from 'react';

// Products
const Example01 = () => (
  <div>
    <h1>Example01</h1>
  </div>
);

export default Example01;
```

```js
// Imports
import React from 'react';

// Products
const Example02 = () => (
  <div>
    <h1>Example02</h1>
  </div>
);

export default Example02;
```

#### routes / index.js

Shortly after creating your view component create a route file by passing the following properties.

```js
// Routes
const Routes = {
  example01: '/example01',
  example02: '/example02',
};

```

After defining the routes, define a const `Dashmin` by passing defining properties. Dashmin requires information for `navbar`,` sidebar` and `content`. so it is important to inform them.

```js
const Dashmin = {
  // navbar
  navbar: {

  }

  // sidebar
  sidebar: {

  }

  // Content
  content: [

  ]
}

```

#### navbar: { }

in navbar you need to pass a `user` object, passing` avatar`, `name` and` jobRole`. these will be the information displayed in the dropdown.

```js
const Dashmin = {
  // navbar
  navbar: {
    user: {
      avatar: 'https://imgur.com/NpICPSl.jpg',
      name: 'R o m u l l o',
      jobRole: 'Administrator',
    },
  },
}

```

#### sidebar: { }

For the `sidebar` you need to pass` brand` and `buttons`. For `brand` you need to pass only the name of your organization by entering the full name` max` and abbreviated `min`.
For `buttons`, a` name`, `icon` and` route` are required.

Sobre os icones .. o Dashmin usa o `React icons`, então você pode simplesmente importar os icones que deseja usar e passar o component para icon.

```js
// Icons
import {
  IoMdOptions,
  IoMdPeople,
} from 'react-icons/io'

const Dashmin = {
  // sidebar
  sidebar: {
    // brand
    brand: {
      max: 'D A S H M I N',
      min: 'dmin'
    },

    // buttons
    buttons: [
      {
        name: 'Example01',
        icon: {
          component: <IoMdOptions />,
        },
        route: Routes.example01,
      },
      {
        name: 'Example02',
        icon: {
          component: <IoMdOptions />,
        },
        route: Routes.example02,
      },
    ]
  }
}

```

#### content: [ ]

Finally the part of content. For it will be necessary to pass an array of objects containing the `route` and the visualization component to be redemptively` view`.

```js
// Views
import Example01 from '../pages/example01';
import Example02 from '../pages/example02';

const Dashmin = {
  // content
  content: [
    {
      route: Routes.example01,
      view: Example01
    },
    {
      route: Routes.example02,
      view: Example02
    },
  ]
}

```

### Full configuration

The Route file containing the settings made above.

#### routes / index.js

```js
// React
import React from 'react';

// Views
import Example01 from '../views/example01';
import Example02 from '../views/example02';

// Icons
import {
  IoMdOptions,
  IoMdPeople,
} from 'react-icons/io'

// Routes
const Routes = {
  example01: '/example01',
  example02: '/example02',
};

// Dashmin
const Dashmin = {
  // Navbar
  navbar: {
    user: {
      avatar: 'https://imgur.com/NpICPSl.jpg',
      name: 'R o m u l l o',
      jobRole: 'Administrator',
    },
  },

  // Sidebar
  sidebar: {
    // brand
    brand: {
      max: 'D A S H M I N',
      min: 'dmin'
    },

    // buttons
    buttons: [
      {
        name: 'Example01',
        icon: {
          component: <IoMdOptions />,
        },
        route: Routes.example01,
      },
      {
        name: 'Example02',
        icon: {
          component: <IoMdPeople />,
        },
        route: Routes.example02,
      },
    ]
  },

  // Content
  content: [
    {
      route: Routes.example01,
      view: Example01
    },
    {
      route: Routes.example02,
      view: Example02
    },
  ]
};

export default Dashmin;
```

#### app.js

Finally, in your `app.js` import` dashmin` and pass the following properties.

```js
// Imports
import React from 'react';
import { Dashmin } from 'dashmin';
import routes from './routes';

const App = () => (
  <Dashmin
    navbar={routes.navbar}
    sidebar={routes.sidebar}
    content={routes.content}
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

Some frontend libs included.

<p>&#10004; <a href="https://getbootstrap.com/"> Bootstrap </a></p>
<p>&#10004; <a href="https://react-icons.netlify.com/#/"> React Icons </a></p>
