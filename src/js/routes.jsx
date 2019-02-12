import React from 'react'
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'

import LazyLoading from 'common/components/LazyLoading'

import styles from '../style/index.css'

// This is show case how you can lazy loading component
const ExampleRouteHandler = LazyLoading(() => import('views/example'));
const CallReasonsRouteHandler = LazyLoading(() => import('views/callReasons'));
const LeadFormRouteHandler = LazyLoading(() => import('views/leadForm'));
const Header = LazyLoading(() => import('common/components/Header/Header'));

const CustomerServiceRouteHandler = LazyLoading(() => import('views/customerService'));
const DynamicFormRouteHandler = LazyLoading(() => import('views/dynamicForm'));

// This show case how you can access routing info in your component
const HeaderWithRouter = withRouter((props) => <Header {...props} />)

module.exports = (
  <div className={styles.container}>
    <HeaderWithRouter />
    <hr />
    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={ExampleRouteHandler} />
        <Route path="/callReasons" component={ DynamicFormRouteHandler } />
        <Route path="/customerService" component={CustomerServiceRouteHandler} />
        <Route path="/leadForm" component={ DynamicFormRouteHandler /* LeadFormRouteHandler */ } />
        <Route path="*" component={ExampleRouteHandler} />
      </Switch>
    </div>
  </div>
)
