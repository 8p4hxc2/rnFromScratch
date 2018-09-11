const requestLogin = async () => await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json();

export default { requestLogin };