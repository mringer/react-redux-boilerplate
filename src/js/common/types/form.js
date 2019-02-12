import { fieldProps } from 'react-jsonschema-form/lib/types';

export type formType = { 
  [key: string]: {
    key: string,
    nextButton?: {},
    backButton?: {},
    schema: {},
    uiSchema: {},
    formData: {}
  }
} 