import { isTriplet } from './pythagoras';

test('positives test case: 3² + 4² = 5²', () => {
    expect(isTriplet(3, 4, 5)).toBe(true);
});

test('negatives test case: 1² + 1² = 3²', () => {
    expect(isTriplet(1, 1, 3)).toBe(false);
});