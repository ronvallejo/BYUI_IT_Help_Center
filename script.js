// script.js
const stars = document.querySelectorAll('.fa-star');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        // Handle the selected rating (index + 1)
        alert(`You selected ${index + 1} stars!`);

        // You can send this rating to your SharePoint database here
    });
});
