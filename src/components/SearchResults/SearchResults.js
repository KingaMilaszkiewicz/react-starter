import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon.js';

class SearchResults extends React.Component {
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
    cards: PropTypes.array,
    icon: PropTypes.node,
    addCard: PropTypes.func,
  }

  render() {
    const { title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}<span className={styles.icon}><Icon name={icon} /></span></h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;