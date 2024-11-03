document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.custom-dropdown');
    const dropdownBtn = document.getElementById('dropdownBtn');

    // Toggle dropdown and menu icon
    dropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });

    // Close dropdown when clicking on a menu item
    const menuItems = dropdown.querySelectorAll('.dropdown-menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            dropdown.classList.remove('active');
        });
    });

    // Prevent dropdown from closing when clicking inside it
    dropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});