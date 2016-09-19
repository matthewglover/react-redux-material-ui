import React, { PropTypes } from 'react';

const DEFAULT = { backgroundColor: 'red', width: '100px', height: '100px' };

const Square = ({ styles }) =>
  <div style={styles || DEFAULT}>
    Hello world
  </div>;

Square.propTypes = {
  styles: PropTypes.object,
};

export default Square;
