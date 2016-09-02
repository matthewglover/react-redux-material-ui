import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import { VisibilityFilters } from '../constants';
import { setVisibilityFilter } from '../action_creators';


const Selector = ({ onChange, selected }) =>
  <IconMenu
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    onChange={onChange}
    value={selected}
  >
    <MenuItem value={VisibilityFilters.SHOW_ALL} primaryText="Show all" />
    <MenuItem value={VisibilityFilters.SHOW_ACTIVE} primaryText="Show active" />
    <MenuItem value={VisibilityFilters.SHOW_COMPLETED} primaryText="Show Completed" />
  </IconMenu>;

Selector.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

const mapStateToProps = (state) =>
  ({
    selected: state.visibilityFilter,
  });

const mapDispatchToProps = (dispatch) =>
  ({
    onChange: (evt, filter) => dispatch(setVisibilityFilter(filter)),
  });

const connector =
  connect(mapStateToProps, mapDispatchToProps);

const FilterSelector =
  connector(Selector);

export default FilterSelector;
