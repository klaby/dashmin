<div align="center">
    <img src="https://github.com/hiukky/dashmin-react/blob/master/assets/logo.png" width="300x300" height="300" />
    <h1> ... d a s h m i n ... </h1>
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

Hello dev .. this is Dashmin! It is nothing more than a simple and elegant base to help you in the development of your administrative system. It doesn't have many components yet, but it already has some famous libraries like Material UI and Reactstrap integrated, so if you know any of them it will be easy to create your pages .. if you don't want to use any of them, feel free to use the library. to your liking.
So let's start.

If you want to create your admin using DASHmin, follow the installation tutorial below!

## &#10003; Structure
```bash
├── assets
│   ├── logo.png
│   ├── login.png
│   ├── dashmin.png
├── node_modules
├── public
├── src
│   ├── components
│   ├── helpers
│   ├── routes
│   ├── services
│   ├── store
│   ├── views
│   ├── App.js
│   ├── index.js
├── .editorconfig
├── .env
├── .gitignore
├── .travis.yml
├── package.json
├── README.md
└── LICENSE.md
```

## &#10003; Preview

<strong> User: </strong> dashmin
<strong> pass: </strong> 123

<p><a href="https://hiukky.github.io/dashmin-react/"> <strong> Live demo </strong> </a></p>

#### Login
<img src="https://github.com/hiukky/dashmin-react/blob/master/assets/login.png" />

#### Admin
<img src="https://github.com/hiukky/dashmin-react/blob/master/assets/dashmin.png" />


## &#10003; Requirements

To run this project, you need to have <strong>Node.js</strong> installed on your machine! If you do not have it, go to the website https://nodejs.org/en/ and download and install it as it is taught in the documentation!


## &#10003; Instalation

To start clone the repository and install the dependencies using the commands below.

```
git clone https://github.com/hiukky/dashmin-react.git -b master nameOfYourProject
```

```
cd nameOfYourProject
```

```
yarn install
```
#### or
```
npm install
```

## &#10003; How to use

Right .. after installing all the dependencies you can run the application and check if everything is working correctly.

```
yarn run start
```
#### or
```
npm run start
```

Ready!! if everything went well, just check your application in the browser http://127.0.0.1:3000/.

## &#10003; Creating your views
Dashmin is already all set up, so for starters you can create your views in `src/views/YourView` and then use it in the routes file in `routes`.

#### views / Example01.js

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

#### views / Example02.js
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

## &#10003; Configuring Routes and Dashmin
#### routes / index.js

After creating your view, go to `routes/index.js` and import the created views.

```js
// Views
import Example01 from 'pages/example01';
import Example02 from 'pages/example02';
```

Define your routes.
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

In `navbar` you need to enter a dropdown object containing the `user` and `buttons` objects.

```js
// Serices
import { logout }  from 'services/auth';

const Dashmin = {
  // navbar
  navbar: {
    // Dropdown
    dropdown: {
      // User Profile
      user: {
        avatar: 'https://i.imgur.com/NpICPSl.jpg',
        name: 'R o m u l l o',
        jobRole: 'Administrator',
      },

      // Buttons events
      buttons: {
        settings: () => {},
        profile: () => {},
        logout: () => {
          logout();
          document.location.reload();          
        }
      }
    }
  },
}

```

#### sidebar: { }

For the `sidebar` you need to pass` brand` and `buttons`. For `brand` you need to pass only the name of your organization by entering the full name `max` and abbreviated `min`.
For `buttons`, a` name`, `icon` and `route` are required.

Sobre os icones .. o Dashmin usa o `React icons`, então você pode simplesmente importar os icones que deseja usar e passar o component para icon.

```js
// Icons
import {
  IoMdOptions,
  IoMdPeople,
} from 'react-icons/io';

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
        icon: <IoMdOptions />,
        route: Routes.example01,
      },
      {
        name: 'Example02',
        icon: <IoMdOptions />
        route: Routes.example02,
      },
    ]
  }
}

```

#### content: [ ]

Finally the part of content. For it will be necessary to pass an array of objects containing the `route` and the visualization component to be redemptively `view`.

```js
// Views
import Example01 from 'pages/example01';
import Example02 from 'pages/example02';

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
import Example01 from 'views/example01';
import Example02 from 'views/example02';

// Icons
import {
  IoMdOptions,
  IoMdPeople,
} from 'react-icons/io';

// Routes
const Routes = {
  example01: '/example01',
  example02: '/example02',
};

// Dashmin
const Dashmin = {
  // Navbar
  navbar: {
    // Dropdown
    dropdown: {
      // User Profile
      user: {
        avatar: 'https://i.imgur.com/NpICPSl.jpg',
        name: 'R o m u l l o',
        jobRole: 'Administrator',
      },

      // Buttons events
      buttons: {
        settings: () => {},
        profile: () => {},
        logout: () => {
          logout();
          document.location.reload();          
        }
      }
    }
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
        icon: <IoMdOptions />,
        route: Routes.example01,
      },
      {
        name: 'Example02',
        icon: <IoMdOptions />
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

### Finishing

Once you have followed the steps above, you can now test your app using one of the commands below if you have not previously run it.

```
yarn run start
```
#### or
```
npm run start
```

Ready!! if everything went well, just check your application in the browser http://127.0.0.1:3000/.

## &#10003; Libraries

<p>📍 <a href="https://material-ui.com/"> Material UI </a></p>
<p>📍 <a href="https://getbootstrap.com/"> Reactstrap </a></p>
<p>📍 <a href="https://react-icons.netlify.com/#/"> React Icons </a></p>
<p>📍 <a href="https://www.npmjs.com/package/react-router-dom"> React Router Dom </a></p>
<p>📍 <a href="https://redux.js.org/"> Redux </a></p>
<p>📍 <a href="https://material-ui.com/"> Styled Components </a></p>
