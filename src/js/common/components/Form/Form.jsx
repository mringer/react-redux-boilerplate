import React, { PureComponent } from 'react';
import Form from "react-jsonschema-form";

import styles from './Form.css';

/**
 * Form
 * =============
 * Besides it is acting as an example show case
 * Please also spend some time on the comments, it might
 * help you to grab more solid understanding of using React.
 *
 * Using React is easy, but using React correctly could be hard
 *
 * @extends PureComponent
 */

class SchemaForm extends PureComponent {

  render() {
    // passing in the actions
    const { form, updateForm, getForm } = this.props;
    const result = form && form.result ? form.result : null;
    
    console.log(form);

    const log = (type) => { 
      return console.log.bind(console, type); 
    }

    if (result && result.id && result.id > 0) {
      return (
        <Form schema={result.schema}
            onChange={ getForm } // log('changed') }
            onSubmit={ updateForm }
            onError={ log("errors") } />
      );
    }
    return <div />;
  }
}

export default SchemaForm;
