import { connect } from 'react-redux';
import SearchResults from './SearchResults.js';
import { getCardsFromLists, createActionAddCard } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsFromLists(state, props.match.params.searchString),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);