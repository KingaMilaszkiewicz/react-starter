import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    image: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the things!</p>
  }

  render() {
    return (
      <section className={styles.component}>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <Hero titleText={this.props.title} imageImg={this.props.image} />
        <div className={styles.columns}>
          <Column title={'Title 1'}></Column>
          <Column title={'Title 2'}></Column>
          <Column title={'Title 3'}></Column>
        </div>
      </section>
    )
  }
}

export default List;
