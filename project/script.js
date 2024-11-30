function upDate(previewPic) {
    // Change the background image of the image container
    document.getElementById('image').style.backgroundImage = 'url(' + previewPic.src + ')';
    // Change the text inside the image container
    document.getElementById('image').innerHTML = previewPic.alt;
}

function undo() {
    // Reset the background image
    document.getElementById('image').style.backgroundImage = 'url("")';
    // Reset the text inside the image container
    document.getElementById('image').innerHTML = 'Hover over an image below to display here.';
}

// Add event listeners to each gallery image
let galleryImages = document.querySelectorAll('.gallery-item');
galleryImages.forEach(image => {
    image.addEventListener('mouseover', () => upDate(image));
    image.addEventListener('mouseout', undo);
});
