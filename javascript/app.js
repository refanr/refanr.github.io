let isGrey = false;
function changeColor() {
    if (isGrey) {
        document.body.style.backgroundColor = 'red';
        isGrey = false;
    } else {
        document.body.style.backgroundColor = 'grey';
        isGrey = true;
    }
}