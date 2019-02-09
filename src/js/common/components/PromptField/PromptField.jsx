
import React, { PureComponent } from 'react';
import styles from './PromptField.css';

export const PromptField = ({value, placeholder}) => {
    return <div className={styles.prompt} >{(value) ? value : placeholder}</div>;
};