import React from 'react';
import { Router } from '@reach/router';
import PropTypes from 'prop-types';

function DynamicRoute({ dynamicModuleResolver, path }) {
  return (
    <Router primary={false}>
      <LazyRoute path={path} dynamicModuleResolver={dynamicModuleResolver} />
    </Router>
  );
}

function LazyRoute({ module, path, dynamicModuleResolver, ...props }) {
  console.log(module);
  console.log(dynamicModuleResolver);
  return <div></div>;
}

DynamicRoute.propTypes = {
  dynamicModuleResolver: PropTypes.func.isRequired,
  path: PropTypes.string
};

LazyRoute.propTypes = {
  dynamicModuleResolver: PropTypes.func.isRequired,
  path: PropTypes.string,
  module: PropTypes.any
};
export default DynamicRoute;
