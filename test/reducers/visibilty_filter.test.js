import test from 'ava';
import { setVisibilityFilter } from '../../app/action_creators';
import visibilityFilter from '../../app/reducers/visibility_filter';

test('visibilityFilter action returns new filter', t => {
  t.is(visibilityFilter('SHOW_ALL', setVisibilityFilter('SHOW_COMPLETED')), 'SHOW_COMPLETED');
});

test('non-visibilityFilter action returns current filter', t => {
  t.is(visibilityFilter('SHOW_ALL', { type: 'TEST' }), 'SHOW_ALL');
});
