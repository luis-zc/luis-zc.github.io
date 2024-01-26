document.addEventListener("DOMContentLoaded", function () {
    const nmToggle = document.getElementById("nmToggle");
    const icons = document.querySelectorAll(".footer-right a i");
    const headerLinks = document.querySelectorAll("header a");
    const projectBoxes = document.querySelectorAll(".project-box");

    nmToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        icons.forEach(icon => {
            icon.classList.toggle("white-color");
        });
        headerLinks.forEach(link => {
            link.classList.toggle("white-color");
        });


        // Toggle the button icon and background color based on the body class
        const button = document.getElementById("nmToggle");
        const buttonIcon = button.querySelector("i");
        
        if (document.body.classList.contains("dark-mode")) {
            buttonIcon.classList.remove("fa-moon");
            buttonIcon.classList.add("fa-sun");
        } else {
            buttonIcon.classList.remove("fa-sun");
            buttonIcon.classList.add("fa-moon");
        }
    });
});

