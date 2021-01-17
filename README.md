## router-util
[![npm version](https://badgen.net/npm/v/router-util)](https://www.npmjs.com/package/router-util)
![minified + gzipped](https://badgen.net/bundlephobia/minzip/router-util)



This library contains a few API's that provides routing capabilities for react apps that are multi pages   

It provides a component that can be configured with all routes and their components and handles the details of rendering 
the necessary routes and setting up the underlying mechanism of routing in react apps.   

Built with [react-router-dom](https://www.npmjs.com/package/react-router-dom) and [React](https://reactjs.org)

## Installation 

Install from [NPM](https://npmjs.org) or [Yarn](https://yarnpkg.com/)  

```bash
   npm i router-util --save
   yarn add router-util
```

## Usage 
Declare your routes as a list with this format 

```jsx
   //src/routes.js

   import MyComponetn1 from './src/MyComponent1
   import MyComponent2 from './src/MyComponent2

   const routes = [
      {
         pathname: '/page1',
         component: MyComponent1,
         exact: true,
         key: 'sd'      // unique key
      },
      {
         pathname: '/page2',
         component: MyComponent2,
         exact: true,
         key: 'sdas'  
      }
   ]

   export default routes 
```


In `App.js` 

```jsx
   import React from 'react'
   import {RenderRoutes} from 'router-utils'
   import routes from './routes'

   function App(props){
      return (
         <RenderRoutes routes={routes}>
      )
   }

   export default App
```   


To use Routing capabilities in other components, for example to redirect users once they have signed in to another page. use the `useRouter()` hook exported from `router-util`.

In `Signin.js`.

```jsx
   import React from 'react'
   import {useRouter} from 'router-util'
   // auth utils 
   import {useAuth} from '../auth'
   import SigninPageComponent from './SigninPageComponent'

   function Signin(props){
      // grab the router object
      const router = useRouter()
      const auth = useAuth()

      const signinUser = () => {
         auth.signin(/*signin*/)
            .then(() => {
               router.push('/page')
            }).catch(console.error)
      }

      return (
         <SigninPageComponent signin={signin} />
      )
   }
```

## Exports 
+ `RenderRoutes` - takes a list of routes, renders a `BrowserRouter` with the routes provided 
+ `useRouter()` - A hook to allow components use routing capabilities. It exposes a router with the following APII
```js
   {
      push - to push a route to the history
      pop - pops from history 
      state - access route state 
      query - access route query params
      replace - replace a route on the history stack 
      ... react-router-dom props
   }
```
+ `scrollToTop` - A utility to scroll the window to the top 

## Author 

[github/shaddyshad](https://github.com/shaddyshad)

## License

MIT © [shaddyshad](https://github.com/shaddyshad)


