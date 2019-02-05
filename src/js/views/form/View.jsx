import React, { Component, Fragment } from 'react'
import LazyLoading from '../../common/components/LazyLoading'
import { formSelector } from '../../redux/selectors/formSelector'

const LazyForm = LazyLoading(() => import('../../common/components/Form/Form'))

class FormView extends Component {
  render() {
    return (
      <Fragment>
        <LazyForm />
      </Fragment>
    );
  }
}

export default FormView;
