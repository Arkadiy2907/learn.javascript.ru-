fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => resData(data))
    .catch(console.log("error"));

function resData(data) {
    const header = document.querySelector('h1');
    let div = document.createElement("div");
    div.className = "bodyEl";
    console.log(!!data);
    let arr = !!data && data.slice(0, 5);
    // console.log(!!arr.length);
    // if(!arr.length)console.log('error');
    div.innerHTML =
        `<ul>
            ${arr.map(
            el => `<li>
                    <p>name: ${el.name}</p>
                    <p>username: ${el.username}</p>
                    <p>email: ${el.email}</p>
                </li>` ).join(" ")}
        </ul>`
    header.after(div)
}
