import { describe, expect, test } from '@jest/globals';
import { isTied } from './isTied';

describe('isTied helper function', () => { 
  test('should return false when the game is not tied', () => { 
    const score = [8, 7, 5, 0];
    const input = isTied(score);

    expect(input).toBe(false);
   })
 })