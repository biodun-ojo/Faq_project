const sections = document.getElementsByClassName('secs');
const show = document.querySelectorAll('p');

function toggleDisplay(p) {
    const currentDisplay = p.style.display;

    // Hide all paragraphs first
    show.forEach(show => show.style.display = 'none');

    // Toggle the clicked paragraph's display
    if (currentDisplay === 'none' || currentDisplay === '') {
        p.style.display = 'block';
    } else {
        p.style.display = 'none';
    }
}

Array.from(sections).forEach((one_of_them, index) => {
    one_of_them.addEventListener('click', () => {
        toggleDisplay(show[index]);
    });
    console.log(show[index])
});