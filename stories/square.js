import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Square from '../app/components/square';

storiesOf('Square', module)
  .add('simple', () =>
    <Square />
  )
  .add('big blue', () =>
    <Square styles={{ backgroundColor: 'blue', width: '1000px', height: '200px' }} />
  );
