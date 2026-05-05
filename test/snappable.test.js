// test/snappable.test.js
import { describe, it, expect } from 'vitest';
import Snappable from '../src/snappable.js';

describe('Snappable Library', () => {
  it('should create instance with canvas', () => {
    // Wir machen einen "Fake"-Canvas für den Test
    const fakeCanvas = {
      getContext: () => ({})
    };
    const lib = new Snappable(fakeCanvas);
    
    expect(lib).toBeDefined();
    expect(lib.snapGridSize).toBe(20);
  });

  it('should snap coordinates to grid', () => {
    const fakeCanvas = { getContext: () => ({}) };
    const lib = new Snappable(fakeCanvas);
    
    const result = lib.snapToGrid(123, 456);
    
    expect(result.x).toBe(120);   // 123 → nächste 20er Raster = 120
    expect(result.y).toBe(460);   // 456 → nächste 20er Raster = 460
  });

  it('should have enableSnapping method', () => {
    const fakeCanvas = { getContext: () => ({}) };
    const lib = new Snappable(fakeCanvas);
    
    expect(typeof lib.enableSnapping).toBe('function');
  });
});
