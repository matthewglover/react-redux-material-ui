import test from 'ava';

test('True is true', t => {
  t.ok(true);
});


const delayed = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(10), 1000);
  });

test('Async tests are cool', async t => {
  const expected = await delayed();
  t.is(expected, 10);
});
