function rotateImg() {
    var img = document.getElementById('icon');
    var currentDegree = img.style.transform;
    if (currentDegree == 'rotate(180deg)') {
        img.style.transform = 'rotate(90deg)';
        img.style.transition = 'transform 0.3s ease-in';
    } else {
        img.style.transform = 'rotate(180deg)';
        img.style.transition = 'transform 0.3s ease-in';
    }
}