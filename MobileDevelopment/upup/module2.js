let message = 'Ini adalah pesan dari module 2';

export let sayHi = () => {
  console.log(message);
};

export let selfIntro = () => {
  console.log('Saya dari module 2');
};

export default () => {
  console.log('Saya dari module 1');
};