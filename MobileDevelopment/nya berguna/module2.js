let message = 'Ini adalah pesan dari module 2';

export let sayHi as greet = () => {
    console.log(message);
};

export let introduce as selfIntro = () => {
    console.log('Saya dari module 2');
};

export default () => {
    console.log('Hello from module 2');
};
