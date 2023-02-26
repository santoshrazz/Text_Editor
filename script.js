newFunction();

function newFunction() {
    let textarea = document.getElementById("textarea");
    let copy_btn = document.getElementById("cpyBtn");
    let clr_btn = document.getElementById("clrBtn");
    let pasteBtn = document.getElementById("pasteBtn");
    let upperBtn = document.getElementById("upperBtn");
    let lowerBtn = document.getElementById("lowerBtn");
    let characterspan = document.querySelector(".characters");
    let wordspan = document.querySelector(".word");
    let minutespan = document.querySelector(".minute");
    textarea.addEventListener("input", (e) => {
        let add = e.target.value;
        let character = add.length;
        characterspan.innerHTML = character;
        add = add.trim();
        let word = add.split(' ');
        let clearArr = word.filter((ele) => {
            return ele != "";
        });
        wordspan.innerHTML = clearArr.length;
        let min = clearArr.length / 150;
        minutespan.innerHTML = min.toFixed(3);
    });
    copy_btn.addEventListener("click", () => {
        let words = textarea.value;
        console.log(words);
        navigator.clipboard.writeText(words);
    });
    clr_btn.addEventListener("click", () => {
        textarea.value = "";
        characterspan.innerHTML = "0";
        wordspan.innerHTML = "0";
        minutespan.innerHTML = "0";
    });
    pasteBtn.addEventListener("click", async () => {
        let variable = await navigator.clipboard.readText();
        textarea.value += variable;
    });
    upperBtn.addEventListener("click", () => {
        let value = textarea.value;
        let newvalue = value.toUpperCase();
        textarea.value = newvalue;
    });
    lowerBtn.addEventListener("click", () => {
        let value = textarea.value;
        let newvalue = value.toLowerCase();
        textarea.value = newvalue;
    });
}
function wordCount(e) {

}