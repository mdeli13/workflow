function func() {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === 'delibas123@gmail.com' && password === 'admin123') {
        alert("Login Success");
        window.location.assign("sayfa2.html");
    } else {
        alert("Wrong E-mail or Password");
    }
}
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active-page'));

    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active-page');

    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => item.classList.remove('active'));

    const activeItem = document.querySelector(`.menu li a[onclick="showPage('${pageId}')"]`).parentElement;
    activeItem.classList.add('active');
}

function viewDetails() {
    alert("Booking details will be displayed here.");
}
