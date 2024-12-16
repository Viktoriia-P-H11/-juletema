document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gifts = document.getElementById('gifts').value;

    if (name && age && gifts) {
        alert(`Wishlist for Santa: \nName: ${name}\nAge: ${age}\nWishlist: ${gifts}`);
    } else {
        alert('Please fill in all fields.');
    }
});