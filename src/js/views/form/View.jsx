import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

import LazyLoading from '../../common/components/LazyLoading'
// import { actions as exampleActions } from '../../redux/modules/example'
// import { exampleSelector } from '../../redux/selectors/exampleSelector'
// import { ExampleWithError } from '../../common/components/Example'
// import { ErrorBoundary } from '../../common/components/Utilities'

require('../../../style/index.css')

const LazyForm = LazyLoading(() => import('../../common/components/Form/Form'))

const mapStateToProps = (state) => ({
  example: exampleSelector(state),
})

const mapDispatchToProps = {
  ...exampleActions,
}

@connect(mapStateToProps, mapDispatchToProps)
class FormView extends Component {
  static propTypes = {
    example: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { getAwesomeCode } = this.props

    getAwesomeCode()
  }

  render() {
    return (
      <Fragment>
        <LazyForm {...this.props} />
      </Fragment>
    )
  }
}

export default FormView
