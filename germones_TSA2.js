function darkenColor(color) {
    let rgb = color.match(/\d+/g);
    if (!rgb) return color;

    let r = Math.max(0, parseInt(rgb[0]) - 50);
    let g = Math.max(0, parseInt(rgb[1]) - 50);
    let b = Math.max(0, parseInt(rgb[2]) - 50);

    return `rgb(${r}, ${g}, ${b})`;
}

let isBoxDropped = false; // Track if a box is currently dropped

function showBox(day) {
    let box = document.getElementById("animated-box"); // Use the existing box
    let buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        if (button.textContent === day) {
            let color = window.getComputedStyle(button).backgroundColor;
            let darkBorderColor = darkenColor(color);

            box.style.backgroundColor = color;
            box.style.borderColor = darkBorderColor;
            box.style.opacity = "1"; // Make the box visible

            // Toggle animations
            if (isBoxDropped) {
                box.classList.remove("new-box");
                box.classList.add("bounce-up");

                // Wait for bounce animation to finish before dropping the new one
                setTimeout(() => {
                    box.classList.remove("bounce-up");
                    box.classList.add("new-box");
                }, 1000);
            } else {
                box.classList.add("new-box");
            }

            isBoxDropped = !isBoxDropped; // Flip state
        }
    });
}
