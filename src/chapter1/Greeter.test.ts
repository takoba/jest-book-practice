import { describe, it, expect } from 'vitest';
import { Greeter } from './Greeter.ts';

describe('Greeter', () => {
  it('Say hello and name', () => {
    const greeter = new Greeter();
    expect(greeter.greet('takoba')).toBe('Hello, takoba!');
  })
})
