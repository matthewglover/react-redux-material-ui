import React from 'react';
import { VisibilityFilters } from '../constants';
import FilterLink from '../containers/filter_link';

const Footer = () =>
  (<p>
    Show:
    {' '}
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </p>);

module.exports = Footer;
