import { sortHeroesByHealth } from '../sort';

describe('sortHeroesByHealth', () => {
  test('sorts heroes by health in descending order', () => {
    const heroes = [
      { name: 'Swordsman', health: 10 },
      { name: 'Mage', health: 100 },
      { name: 'Archer', health: 80 },
    ];

    const sortedHeroes = [
      { name: 'Mage', health: 100 },
      { name: 'Archer', health: 80 },
      { name: 'Swordsman', health: 10 },
    ];

    expect(sortHeroesByHealth(heroes)).toEqual(sortedHeroes);
  });
});
