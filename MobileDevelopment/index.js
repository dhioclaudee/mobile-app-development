import { sayHello as salam, greet as sapa, introduce as perkenalan } from './module1.js';
import { sayHi, selfIntro } from './module2.js';
import greeting from '../module2.js';

salam();
sapa();
perkenalan();

sayHi();
selfIntro();

greeting();
