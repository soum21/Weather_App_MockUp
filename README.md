## Build and Run App

The applicaton was created using create-react-app , below given the details of this project.

## Prerequisite

- Make sure you have installed nodejs.
- Make sure you have installed yarn package manager

## Dependencies Installation

- Please git clone the repo: [Git Hub Repo](https://github.com/soum21/ebworx_assesment.git)
- Next run command `yarn install` in the root directory

## Running the application

1. To run the application in development mode please run the command `yarn start` on the root directory.

2. To build for production run the command `yarn build`

# Getting Started

Our application starts at `App.js` file.

# Global Context

Our app wrapped with a global context which contains global states and Global reducer . Which makes these global states accessable in our project tree. Also we can dispatch action on these states from anywhere in the application.

```javascript
<AppContext>{...elements}</AppContext>
```

# Router

For our project we have used Reach Router for routing.
Also we have used webpack magic comments for our dynamic imports of app modules.

### Steps

1.  We create a function for dynamic import. And we send it to our custom Route creator component.

```javascript
<RouterCreator dynamicModuleResolve={dynamicModuleResolver} path={'/:module/*'} />
```

2.  We wrap our lazy route inside `<Router >` tag of reach router.
3.  We load the bundle containing our Component. Here the module param is provided by reach router. This will return a promise.

```javascript
dynamicModuleResolver(module || '');
```

4.  Then React.lazy is resolving them as react component.

```javascript
React.lazy(() => component);
```

5.  And finally we return the component under React.Suspense with a fallback Component.

6.  Our routes are basically our folder name under module folder.

For More Information about React Lazy: [Code_Spliting_React](https://reactjs.org/docs/code-splitting.html)

# Services

- Our http service is written in a class call `apiService.js`.
- Our ApiService class returns a promise which resolve successCase and reject errorCase.
- we have functions for our Api urls
- we have exported them from `services/index.js`

# Components

- Our Project contains resusable components

# Modules

- Application modules are listed inside module folder

# Reducer

- We use `useReducer()` hook for ease of use.
- Our states are differentiated in different files.

# Assests

- All Static assests and list inside the assets folder. And exported from index file

# Theme

- We set up our custom styling theme for different components.

# Styling

- The project uses css in js that is offered by material-ui React.
