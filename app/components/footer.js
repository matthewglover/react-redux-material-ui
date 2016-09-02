import React from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
// import { VisibilityFilters } from '../constants';
// import FilterLink from '../containers/filter_link';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favouritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

const Footer = () =>
  <BottomNavigation selectedIndex={1}>
    <BottomNavigationItem
      label="Recents"
      icon={recentsIcon}
      onTouchTap={() => console.log('Clicked recents')}
    />
    <BottomNavigationItem
      label="Favourites"
      icon={favouritesIcon}
      onTouchTap={() => console.log('Clicked favourites')}
    />
    <BottomNavigationItem
      label="Nearbys"
      icon={nearbyIcon}
      onTouchTap={() => console.log('Clicked nearby')}
    />
  </BottomNavigation>;
  // (<p>
  //   Show:
  //   {' '}
  //   <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
  //   {', '}
  //   <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
  //   {', '}
  //   <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  // </p>);

module.exports = Footer;
