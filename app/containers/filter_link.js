import { connect } from 'react-redux';
import { setVisibilityFilter } from '../action_creators';
import Link from '../components/link';

const mapStateToProps = (state, ownProps) =>
  ({
    active: state.visibilityFilter === ownProps.filter,
  });

const mapDispatchToProps = (dispatch, ownProps) =>
  ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
  });

const connector =
  connect(mapStateToProps, mapDispatchToProps);

const FilterLink =
  connector(Link);

export default FilterLink;
