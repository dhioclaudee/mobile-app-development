import {
    sayHello as salam,
    greet as sapa,
    introduce as perkenalan,
  } from './module1.js';
  import module2, { sayHi, selfIntro } from './module2.js';
  
  salam();
  sapa();
  perkenalan();
  
  sayHi();
  selfIntro();
  
  module2();