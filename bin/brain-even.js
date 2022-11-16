#!/usr/bin/env node

import startGame from '../src/game-engine.js';
import { questionsAndAnswers, challenge } from '../src/brain-even-game.js';

startGame(questionsAndAnswers, challenge);
