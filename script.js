document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".day-btn");
    const container = document.querySelector(".box-container");

    const colors = {
        Monday: "#ff5733",
        Tuesday: "#33ff57",
        Wednesday: "#3357ff",
        Thursday: "#ff33a8",
        Friday: "#ffff33",
        Saturday: "#ff9933",
        Sunday: "#a833ff"
    };

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const day = button.getAttribute("data-day");

            
            const newBox = document.createElement("div");
            newBox.classList.add("box");
            newBox.style.backgroundColor = colors[day];

           
            container.appendChild(newBox);

            
            setTimeout(() => {
                newBox.classList.add("move");
            }, 100);
            
            
            setTimeout(() => {
                newBox.classList.add("fade-out");
                setTimeout(() => newBox.remove(), 1000);
            }, 3000);
        });
    });
});