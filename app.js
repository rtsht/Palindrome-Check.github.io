const txtBox = document.getElementById("text-box");
const answr = document.getElementById("answer");

// Text box highlighting on focus
txtBox.addEventListener("focusin", function() {
    txtBox.style.background = "lightgrey";
    txtBox.select();
});
txtBox.addEventListener("focusout", function() {
    txtBox.style.background = "white";
    if (txtBox.value == "") {
        answer.innerText = "";
    }
});

txtBox.addEventListener("keyup", function() {
    checkText();
});

// Click the button when hitting enter in txt field
txtBox.addEventListener("keyup", function(e) {
    if (e.key == "Enter") {
        checkText();
    }
})

function reverse(str) {
    var reversed = "";
    for (i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function checkText() {
    if (txtBox.value == "") {
        answr.innerText = "";
        return;
    }

    var str = txtBox.value;
    const revText = reverse(str);

    if (str.toLowerCase().replaceAll(" ", "") == revText.toLowerCase().replaceAll(" ", "")) {
        answr.className = "yes-answer";
        answr.innerText = str + "\n" + revText;
    } else {
        answr.className = "no-answer";
        answr.innerText = str + "\n" + revText;
    }
}