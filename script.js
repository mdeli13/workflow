function func(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password1").value;

    if (email === 'delibas123@gmail.com' && password === 'admin123') {
        alert("Login Success");
        window.location.assign("sayfa2.html");
    } else {
        alert("Wrong E-mail or Password");
    }
}

document.getElementById('loginForm')?.addEventListener('submit', func);

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active-page'));

    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active-page');
    }

    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => item.classList.remove('active'));

    const activeItem = document.querySelector(`.menu li a[onclick="showPage('${pageId}')"]`)?.parentElement;
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    function createBookingsTable() {
        const bookingsPage = document.getElementById('bookings');
        if (!bookingsPage) {
            console.error('Bookings page element not found.');
            return;
        }

        const bookingsData = [
            {
                id: "001",
                name: "Yigit Yavuz",
                email: "Yigityavuz9999@gmail.com",
                details: "In 1 month ➔ 4 night stay (Sep 15 2024 ➔ Sep 18 2024)",
                status: "UNCONFIRMED",
                amount: "$1,200.00"
            },
            {
                id: "002",
                name: "Erdem Pehlül",
                email: "erdempehlul.1264325@hotmail.com",
                details: "In almost 2 months ➔ 3 night stay (Oct 10 2024 ➔ Oct 12 2024)",
                status: "UNCONFIRMED",
                amount: "$900.00"
            }
        ];

        const table = document.createElement('table');
        table.className = 'table table-striped';
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['ID', 'Name', 'Email', 'Booking Details', 'Status', 'Amount', 'Actions'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        bookingsData.forEach(booking => {
            const row = document.createElement('tr');

            Object.values(booking).forEach(value => {
                const td = document.createElement('td');
                td.textContent = value;
                row.appendChild(td);
            });

            const actionsTd = document.createElement('td');
            const viewButton = document.createElement('button');
            viewButton.textContent = 'See details';
            viewButton.className = 'btn btn-primary';
            viewButton.addEventListener('click', function () {
                alert('Booking details will be displayed here.');
            });
            actionsTd.appendChild(viewButton);
            row.appendChild(actionsTd);

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        bookingsPage.appendChild(table);

        const paginationDiv = document.createElement('div');
        paginationDiv.className = 'pagination';

        const prevButton = document.createElement('button');
        prevButton.textContent = 'Previous';
        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        paginationDiv.appendChild(prevButton);
        paginationDiv.appendChild(nextButton);
        bookingsPage.appendChild(paginationDiv);
    }

    createBookingsTable();
});
