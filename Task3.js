document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = button.value;

            if (value === "C") {
                display.value = ""; 
            } else if (value === "=") {
                try {
                    // Replace × and ÷ with * and /
                    const result = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
                    display.value = result; 
                } catch (error) {
                    display.value = "Error"; 
                }
            } else {
                display.value += value; 
            }
        });
    });
});
