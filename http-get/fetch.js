document.getElementById("getText").addEventListener("click", getText);

function getText() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.text())
        .then((data) => console.log(data))
}


