#!/usr/bin/env node
import startGame from '../src/game-engine.js';
import { getQuestionAndAnswer, challenge } from '../src/brain-even-game.js';

startGame(getQuestionAndAnswer, challenge);
