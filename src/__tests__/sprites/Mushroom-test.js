import Mushroom from '../../sprites/Mushroom';

describe('Mushroom', () => {
  it('should return the state object', () => {
    const mushroom = new Mushroom({
      game: null,
      x: 0,
      y: 0,
      asset: ''
    })
    expect(mushroom).toBeDefined()
  });

});
