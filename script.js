document.addEventListener("DOMContentLoaded", function () {
    let changeColorBtn = document.getElementById("change-color-btn");
    let colorBox = document.getElementById("color-box");

    changeColorBtn.addEventListener("click", getRandomColor);

    function getRandomColor() {
        let rgbArray = [];
        for (let i = 0; i < 3; i++) {
            let randomNumber = Math.floor(Math.random() * 255);
            rgbArray.push(randomNumber);
        }
        colorBox.style.backgroundColor = `rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`;
    }
});
