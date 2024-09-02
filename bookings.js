document.addEventListener("DOMContentLoaded", function () {
    const { createClient } = supabase;
    const supabaseUrl = 'https://hldpzcbokwjaztheqlsp.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsZHB6Y2Jva3dqYXp0aGVxbHNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2NzgxMjMsImV4cCI6MjA0MDI1NDEyM30.-4TR_2qp9ow1E6ffAHk-LfOSjg5rFGAnSisFFGPPCkY';
    const supabaseClient = createClient(supabaseUrl, supabaseKey);

    const bookingForm = document.getElementById('bookingForm');
    const bookingTableBody = document.querySelector('#bookingTable tbody');

    async function loadBookings() {
        if (!bookingTableBody) {
            console.error('Booking table body not found.');
            return;
        }

        try {
            const { data: bookings, error } = await supabaseClient
                .from('bookings')
                .select('*');

            if (error) {
                console.error('Error loading bookings:', error);
                return;
            }

            bookingTableBody.innerHTML = '';
            bookings.forEach(booking => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${booking.id}</td>
                    <td>${booking.name}</td>
                    <td>${booking.email}</td>
                    <td>${booking.details}</td>
                    <td>${booking.status}</td>
                    <td>${booking.amount}</td>
                `;
                bookingTableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const details = document.getElementById('details').value;
            const status = document.getElementById('status').value;
            const amount = document.getElementById('amount').value;

            try {
                const { data, error } = await supabaseClient
                    .from('bookings')
                    .insert([
                        { name, email, details, status, amount }
                    ]);

                if (error) {
                    console.error('Error adding booking:', error);
                    return;
                }

                bookingForm.reset();
                await loadBookings();
            } catch (error) {
                console.error('Error:', error.message);
            }
        });
    }

    if (bookingTableBody) {
        loadBookings();
    }
});

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
