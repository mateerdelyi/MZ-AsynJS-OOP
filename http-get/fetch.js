document.getElementById("getText").addEventListener("click", getText);

function getText() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.text())
        .then((data) => console.log(data))
        .catch(error => {
            console.error(error);
            alert('Error :(');
        })
}


