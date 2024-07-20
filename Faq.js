const sections = document.getElementsByClassName('secs');
const show = document.querySelectorAll('p');
const images = document.getElementsByClassName('plus');

function toggleDisplay(p, ge) {
    const currentDisplay = p.style.display;

    const currentimg = ge.src = 'assets/images/icon-plus.svg'

    // Hide all paragraphs first
    show.forEach(show => show.style.display = 'none');

    // Reset all images to plus
    Array.from(images).forEach(img => img.src = 'assets/images/icon-plus.svg');

    // Toggle the clicked paragraph's display
    if ((currentDisplay === 'none' || currentDisplay === '') && (currentimg === 'assets/images/icon-plus.svg')) {
        p.style.display = 'block';
        ge.src = 'assets/images/icon-minus.svg'
    } else {
        p.style.display = 'none';
        ge.src = 'assets/images/icon-plus.svg'
    }

    /* if (p.style.display = 'none') {
        ge.src = 'assets/images/icon-plus.svg'
    } */
}

Array.from(sections).forEach((one_of_them, index) => {
    one_of_them.addEventListener('click', () => {
        toggleDisplay(show[index], images[index])
        console.log(show[index], images);
    });
});