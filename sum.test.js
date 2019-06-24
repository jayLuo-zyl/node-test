const job = require('./sum');

describe('Builds Test Case', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect( job.sum(1, 2) ).toBe(3);
  });

  test('shows the data typeof uuid to equal string', () => {
    expect( job.uuid() ).toBe('string');
  });
});


// Test case sample format  --------------------------------------
const can1 = {
  flavor: 'grapefruit',
  ounces: 12,
};
const can2 = {
  flavor: 'grapefruit',
  ounces: 12,
};

describe('The cans on my desk', () => {
  test('have all the same properties', () => {
    expect(can1).toEqual(can2);
  });
  test('are not the exact same can', () => {
    expect(can1).not.toBe(can2);
  });
});