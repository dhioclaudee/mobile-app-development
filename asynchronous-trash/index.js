import { fetchData } from './module1';

fetchData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});
