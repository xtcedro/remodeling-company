// discount-modal.js

document.addEventListener("DOMContentLoaded", () => {
    // Get modal and buttons
    const discountModal = document.getElementById("discount-modal");
    const closeModal = document.getElementById("close-modal");

    // Show the modal after a delay (e.g., 5 seconds)
    setTimeout(() => {
        discountModal.style.display = "block";
    }, 5000);

    // Close modal when the close button is clicked
    closeModal.addEventListener("click", () => {
        discountModal.style.display = "none";
    });

    // Close modal if user clicks outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === discountModal) {
            discountModal.style.display = "none";
        }
    });
});
