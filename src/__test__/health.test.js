import { getHealthStatus } from '../health';

describe('getHealthStatus', () => {
  test('returns healthy for health > 50', () => {
    expect(getHealthStatus({ name: 'Mage', health: 90 })).toBe('healthy');
  });

  test('returns wounded for 15 <= health <= 50', () => {
    expect(getHealthStatus({ name: 'Mage', health: 30 })).toBe('wounded');
  });

  test('returns critical for health < 15', () => {
    expect(getHealthStatus({ name: 'Mage', health: 10 })).toBe('critical');
  });
});
