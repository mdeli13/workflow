function func() {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === 'deneme123@gmail.com' && password === 'deneme123') {
        alert("Login Success");
        window.location.assign("sayfa2.html");
    } else {
        alert("Wrong E-mail or Password");
    }
}