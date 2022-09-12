import { describe, expect, test } from '@jest/globals';
import { generateFinalScore } from './generateFinalScore';

describe('generateFinalScore', () => { 
  test('should return the correct array of objects', () => { 
    const score = [0, 8, 7, 5];
    const input = generateFinalScore(score);
    const expectedOutput = [
      { player: 2,score: 8 },
      { player: 3, score: 7 },
      { player: 4, score: 5 },
      { player: 1, score: 0 }
    ];

    expect(input).toStrictEqual(expectedOutput);
   })
 })