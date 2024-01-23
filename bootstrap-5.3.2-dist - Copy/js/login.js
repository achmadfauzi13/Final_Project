const username = "admin"
const password = "admin123"

function login(){
// tangkap nilai yang di input user
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == username && password == password){
    alert("login sukses");
    window.location.href = "dasboard.html";
    } else {
    alert("Login Failed!");
    }
}