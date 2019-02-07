import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LazyLoading from '../../common/components/LazyLoading'
import { actions as formActions } from '../../redux/modules/form'
import { formSelector } from '../../redux/selectors/formSelector'

require('../../../style/index.css')

const LazyForm = LazyLoading(() => import('react-jsonschema-form/lib/components/Form'))

const mapStateToProps = (state) => ({
  form: formSelector(state),
})

// console.log(formActions);

const mapDispatchToProps = {
  ...formActions,
}

@connect(mapStateToProps, mapDispatchToProps)
class CallReasonsView extends Component {

  componentDidMount() {
    const { getCallReasons } = this.props
    getCallReasons();
    console.log('componentDidMount', this.props)
  }

  render() {
    const log = (type) => { 
        return console.log.bind(console, type); 
    }

    const { form } = this.props;
    const formMap = form && form.form ? form.form : null;
    if (formMap && formMap.size && formMap.size > 0) {
    const s =  formMap.get("schema").toJS();
    return (
      <Fragment>
        <LazyForm // { ...this.props }
        schema={s}
        onChange={ log('changed') } 
        onSubmit={ this.props.updateCallReasons } //log('updated') }
        onError={ log("errors") } />
      </Fragment>
    );
    }
    return <div>Couldn't load Page Reasons</div>;
  }
}

export default CallReasonsView;
