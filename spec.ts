import { describe, it, expect } from './testing';

describe('a subject', function() {

  it('will pass', function() {
    const a = true;
    const b = false;
    expect(a).toEqual(b);
  });

});
