export let fetchData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    return data;
};
