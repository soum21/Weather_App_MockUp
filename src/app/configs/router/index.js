import React from 'react';
import { Router, Redirect } from '@reach/router';
import DynamicRoute from './dynamicRoute';

function dynamicModuleResolver(modulePath) {
  const modulePromise = import(/* webpackChunkName: "module" */ `../../modules/${modulePath}/index`)
    .then((it) => {
      return it;
    })
    .catch((e) => {
      //if use input someroute we dont have then route to home
      //TO:DO /modules/404page instead of module/home
      return import(/* webpackChunkName: "module" */ `../../modules/home/index`);
    });
  return modulePromise;
}

function AppRouter() {
  return (
    <React.Fragment>
      <Router primary={true}>
        <Redirect from={'/'} to={'/home'} noThrow />
      </Router>
      {/* we will create dynamic imports of all module so we dont have to write "import <module> from 'src' */}
      <DynamicRoute dynamicModuleResolver={dynamicModuleResolver} path={'/:module/*'} />
    </React.Fragment>
  );
}

export default AppRouter;
