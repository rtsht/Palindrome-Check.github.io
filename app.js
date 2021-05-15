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

// Dynamic updating of result whilst accepting input
txtBox.addEventListener("keyup", function() {
    checkText();
});

// Test input on enter key - !redundant with dynamic updating!
txtBox.addEventListener("keyup", function(e) {
    if (e.key == "Enter") {
        checkText();
    }
});

// Simple string reverse without modifying og
function reverse(str) {
    var reversed = "";
    for (i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Checking the input for a palindrome. Input is lowered and trimmed of ALL whitespace
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
