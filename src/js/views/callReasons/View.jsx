import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LazyLoading from '../../common/components/LazyLoading';
import { actions as callReasonsActions } from '../../redux/modules/callReasonsForm';
import { callReasonsFormSelector } from '../../redux/selectors/callReasonsFormSelector';
import jp from 'jsonpath';

import { PromptField } from '../../common/components/PromptField/PromptField';

require('../../../style/index.css')

const LazyForm = LazyLoading(() => import('react-jsonschema-form/lib/components/Form'))

const mapStateToProps = (state) => ({
  callReasonsForm: callReasonsFormSelector(state),
})

const mapDispatchToProps = {
  ...callReasonsActions,
}

@connect(mapStateToProps, mapDispatchToProps)
class CallReasonsView extends Component {

  componentDidMount() {
    const { getCallReasons } = this.props
    getCallReasons();
  }

  render() {
    const log = (type) => { 
      return console.log.bind(console, type); 
    };

    // const TitleField = ({title}) => '' {
    //   return '';
    // };
    
    // const PromptField = ({value, placeholder}) => {
    //   return <div className="prompt" >{(value) ? value : placeholder}</div>;
    // };
    
    const fields = { TitleField: ({title}) => '' };
    const widgets = { PromptField: PromptField };

    const { callReasonsForm } = this.props;
    console.log('callReasonsForm', callReasonsForm);

    // const formMap = callReasonsForm && callReasonsForm.form ? callReasonsForm.form : null;
    const formMap = jp.query(this.props, '$.callReasonsForm.form').pop();
    
    if (formMap && formMap.size && formMap.size > 0) {
      const form =  formMap.get("form").toJS();
      return (
        <Fragment>
          <LazyForm
          schema={form.schema} 
          uiSchema={form.uiSchema}
          formData={form.formData}
          fields={fields}
          widgets={widgets}
          // onChange={ log('changed') } 
          // onError={ log("errors") }
          onSubmit={ this.props.submitCallReasons }>
            <div>
              <button type="submit">Next</button>
            </div>
          </LazyForm>
        </Fragment>
      );
    }
    return <div>Couldn't load Call Reasons</div>;
  }
}

export default CallReasonsView;
