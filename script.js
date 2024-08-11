document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const resumes = document.querySelectorAll(".resume");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            navLinks.forEach(nav => nav.classList.remove("active"));
            resumes.forEach(resume => resume.classList.remove("active"));

            this.classList.add("active");
            const target = this.getAttribute("data-target");
            document.getElementById(target).classList.add("active");
        });
    });

    // document.getElementById("toggle-dark-mode").addEventListener("click", function () {
    //     document.body.classList.toggle("dark-mode");
    // });

    document.getElementById("darkmode-toggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});