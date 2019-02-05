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

class Example extends PureComponent {

  render() {
    const { form } = this.props;
    const result = form && form.result ? form.result : null;

    // const schema = {
    //   title: "Todo",
    //   type: "object",
    //   required: ["title"],
    //   properties: {
    //     title: {type: "string", title: "Title", default: "A new task"},
    //     done: {type: "boolean", title: "Done?", default: false}
    //   }
    // };
    
    const log = (type) => console.log.bind(console, type);

    return (
      <Form schema={schema}
          onChange={log("changed")}
          onSubmit={log("submitted")}
          onError={log("errors")} />
    );
  }
}

export default Example;
