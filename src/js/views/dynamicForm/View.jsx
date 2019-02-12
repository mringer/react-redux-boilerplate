import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LazyLoading from '../../common/components/LazyLoading';
import { actions as formActions } from '../../redux/modules/dynamicForm';
import { formSelector } from '../../redux/selectors/dynamicFormSelector';
import { PromptField } from '../../common/components/PromptField/PromptField';
import jp from 'jsonpath';

require('../../../style/index.css')

const LazyForm = LazyLoading(() => import('react-jsonschema-form/lib/components/Form'))

const mapStateToProps = (state) => ({
  dynamicForm: formSelector(state),
})

const mapDispatchToProps = {
  ...formActions
}

@connect(mapStateToProps, mapDispatchToProps)
class DynamicFormView extends Component {

  componentDidMount() {
    const { getForm } = this.props;
    getForm(this.props.location.pathname);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { dynamicForm, getForm } = this.props;
    const nextPath = jp.query(nextProps, '$.location.pathname').pop();
    const thisPath = jp.query(this.props, '$.location.pathname').pop();

    if(!dynamicForm[thisPath] || !dynamicForm[nextPath]) 
    {
      getForm(this.props.location.pathname);
      return true;
    }

    return (thisPath !== nextPath);
  }

  render() {
    // console.log('component Did render',this.props.location.pathname);
    
    const fields = { TitleField: ({title}) => '' };
    const widgets = { PromptField: PromptField };
    const { dynamicForm, submitForm, getForm } = this.props;
    
    if(dynamicForm[this.props.location.pathname]) 
    {
      // console.log( dynamicForm );

      function submitHandler (form) {
        submitForm({ key: this.key, ...form });
      };  
      
      const {schema, uiSchema, formData, nextButton, backButton, key}  = dynamicForm[this.props.location.pathname]; 
      console.log('formData', formData)
      return (
        <Fragment>
          <LazyForm
          schema={schema} 
          uiSchema={uiSchema}
          formData={formData}
          fields={fields}
          widgets={widgets}
          onChange={ null } 
          onError={ null }
          onSubmit={ submitHandler.bind({key}) }>
            <div>
            { nextButton && 
              <button type="submit">Next</button>
            }
            { backButton &&
              <button type="submit">Back</button>
            } 
            </div>
          </LazyForm>
        </Fragment>
      );
    }
    return <div>Couldn't load the form</div>;
  }
}

export default DynamicFormView;
