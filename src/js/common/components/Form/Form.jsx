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
    
    const { form } = this.props;

    const formMap = form && form.form ? form.form : null;
    
    const log = (type) => { 
      return console.log.bind(console, type); 
    }

    if (formMap && formMap.size && formMap.size > 0) {

      const s =  formMap.get("schema").toJS();

      return (
        <Form schema={s}
            onChange={ log('changed') } // getForm } 
            onSubmit={ log('updated') }
            onError={ log("errors") } />
      );
    }
    return <div>Couldn't load form</div>;
  }
}

export default SchemaForm;
