import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

class Header extends PureComponent {
  render() {
    const { location } = this.props;
    const { pathname } = location;

    const isHome = pathname === '/';
    const isJustAnotherPage = pathname === '/page';
    const isFormPage = pathname === '/form';
    const isCallReasonsPage = pathname === '/callReasons';

    return (
      <header className={styles.globalHeader}>
        <ul>
          <li className={!isHome ? styles.active : ''}>
            {
              isHome
                ? 'Home' : <Link to="/">Home</Link>
            }
          </li>
          <li className={!isJustAnotherPage ? styles.active : ''}>
            {
              isJustAnotherPage
                ? 'Just Another Page' : <Link to="/page">Just Another Page</Link>
            }
          </li>
          <li className={!isFormPage ? styles.active : ''}>
            {
              isFormPage
                ? 'JSON Schema Form Page' : <Link to="/form">JSON Schema Form Page</Link>
            }
          </li>
          <li className={!isCallReasonsPage ? styles.active : ''}>
            {
              isCallReasonsPage
                ? 'Call Reasons Page' : <Link to="/callReasons">Call Reasons Page</Link>
            }
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
