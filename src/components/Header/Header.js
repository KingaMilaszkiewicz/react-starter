import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon.js';
import PropTypes from 'prop-types';
import { settings, faqData, infoData } from '../../data/dataStore';

class Header extends React.Component {

  static propTypes = {
    icon: PropTypes.node,
  }

  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.mainIcon} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>{settings.home}</NavLink>
              <NavLink exact to='/' activeClassName='active'>{infoData.title}</NavLink>
              <NavLink exact to='/' activeClassName='active'>{faqData.title}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;