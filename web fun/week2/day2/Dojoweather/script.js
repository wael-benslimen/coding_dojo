function msg() {
    alert("Loading weather report...")
}
function del() {
    document.querySelector(".cookies").remove()
}
function tempchange(element) {
    const temunit = element.value;

    const alltemps = document.querySelectorAll('.sidebyside p');

    alltemps.forEach(tempElement => {
        let temp = parseFloat(tempElement.textContent.replace('°', ''));

        if (temunit === '°C') {
            temp = (temp - 32) * (5 / 9);
        } else {
            temp = (temp * 9 / 5) + 32;
        }

        tempElement.textContent = temp.toFixed(0) + temunit;
    });
}
