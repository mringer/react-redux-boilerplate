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


    const TitleField = ({title}) => {
      return '';
    };
    
    const PromptField = ({value, placeholder}) => {
      return <div className="prompt" >{(value) ? value : placeholder}</div>;
    };
    
    const fields = { TitleField: TitleField };
    const widgets = { PromptField: PromptField };

    const { form } = this.props;
    const formMap = form && form.form ? form.form : null;
    if (formMap && formMap.size && formMap.size > 0) {
    const schema =  formMap.get("schema").toJS();
    return (
      <Fragment>
        <LazyForm
        schema={schema.JSONSchema} 
        uiSchema={schema.UISchema}
        formData={schema.FormData}
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
