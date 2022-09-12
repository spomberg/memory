import { describe, expect, test } from '@jest/globals';
import { isTied } from './isTied';

describe('isTied helper function', () => { 
  test('should return false when the game is not tied', () => { 
    const score = [0, 7, 5, 8];
    const input = isTied(score);

    expect(input).toBe(false);
   })

  test('should return the winning score when the game is tied', () => { 
    const score = [0, 8, 5, 8];
    const input = isTied(score);

    expect(input).toBe(8);
   })
 })