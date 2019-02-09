import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import jp from 'jsonpath';
import LazyLoading from '../../common/components/LazyLoading';
import { actions as leadFormActions } from '../../redux/modules/leadForm';
import { leadFormSelector } from '../../redux/selectors/leadFormSelector';
import { PromptField } from '../../common/components/PromptField/PromptField';
import { ObjectField } from '../../common/components/ObjectField/ObjectField';

require('../../../style/index.css')

const LazyForm = LazyLoading(() => import('react-jsonschema-form/lib/components/Form'))

const mapStateToProps = (state) => ({
  leadForm: leadFormSelector(state),
})

const mapDispatchToProps = {
  ...leadFormActions,
}

@connect(mapStateToProps, mapDispatchToProps)
class LeadFormView extends Component {

  componentDidMount() {
    const { getLeadForm } = this.props
    getLeadForm();
  }

  render() {
    const fields = { 
      TitleField: ({title}) => '',
      // ObjectField: ObjectField 
    };
    const widgets = { PromptField: PromptField };
    const formMap = jp.query(this.props, '$.leadForm.form').pop();
    
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
          onSubmit={ this.props.submitCallReasons }>
            <div>
              <button>Back</button>
              <button type="submit">Next</button>
            </div>
          </LazyForm>
        </Fragment>
      );
    }
    return <div>Couldn't load Lead From</div>;
  }
}

export default LeadFormView;
