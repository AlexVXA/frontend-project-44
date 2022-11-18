#!/usr/bin/env node

import startGame from '../src/game-engine.js';
import { questionsAndAnswers, challenge } from '../src/brain-gcd-game.js';

startGame(questionsAndAnswers, challenge);
