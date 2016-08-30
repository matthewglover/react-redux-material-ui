import test from 'ava';
import { setVisibilityFilter } from '../../app/action_creators';
import visibilityFilter from '../../app/reducers/visibility_filter';

test('updates filter when visibility action provided', t => {
  t.is(visibilityFilter('SHOW_ALL', setVisibilityFilter('SHOW_COMPLETED')), 'SHOW_COMPLETED');
});

test('returns current filter when other action provided', t => {
  t.is(visibilityFilter('SHOW_ALL', { type: 'TEST' }), 'SHOW_ALL');
});
