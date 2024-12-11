// Accordion functionality
document.querySelectorAll('.accordion-item h3').forEach((header) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Toggle content visibility
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
