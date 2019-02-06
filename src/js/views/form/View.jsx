import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LazyLoading from '../../common/components/LazyLoading'
import { actions as formActions } from '../../redux/modules/form'
import { formSelector } from '../../redux/selectors/formSelector'
// import { ExampleWithError } from '../../common/components/Example'
import { ErrorBoundary } from '../../common/components/Utilities'

require('../../../style/index.css')

const LazyForm = LazyLoading(() => import('../../common/components/Form/Form'))

const mapStateToProps = (state) => ({
  form: formSelector(state),
})

// console.log(formActions);

const mapDispatchToProps = {
  ...formActions,
}

@connect(mapStateToProps, mapDispatchToProps)
class FormView extends Component {

  componentDidMount() {
    // const { getForm, updateForm } = this.props
    // updateForm;
    console.log('componentDidMount')
    console.log(this.props)
  }

  render() {
    console.log('render')
    console.log(this.props)
    return (
      <Fragment>
        <LazyForm { ...this.props} />
      </Fragment>
    );
  }
}

export default FormView;
