import React, { useMemo } from 'react';
import { Router } from '@reach/router';
import PropTypes from 'prop-types';
import Loading from '../../components/loading';

function DynamicRoute({ dynamicModuleResolver, path }) {
  return (
    <Router primary={false}>
      <LazyRoute path={path} dynamicModuleResolver={dynamicModuleResolver} />
    </Router>
  );
}

function LazyRoute({ module, path, dynamicModuleResolver, ...props }) {
  // module - Module name, this is supplied from reach router
  //useMemo chacing modules
  const memorizedModuleResolver = useMemo(() => dynamicModuleResolver(module || ''), [dynamicModuleResolver, module]);
  return <Route component={memorizedModuleResolver} {...props} />;
}

function Route({ component, ...props }) {
  //Component are coming as promise and we are resolving them as react component.
  //Suspense fallback change
  const Component = React.lazy(() => component);
  return (
    <React.Suspense fallback={<Loading />}>
      <Component {...props} />
    </React.Suspense>
  );
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

Route.propTypes = {
  component: PropTypes.any
};

export default DynamicRoute;
