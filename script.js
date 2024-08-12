document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const resumes = document.querySelectorAll(".resume");

        // Function to set the active tab based on screen size
        function setActiveLinkBasedOnScreenSize() {
            const screenWidth = window.innerWidth;
    
            // Remove active class from all links and resumes
            navLinks.forEach(nav => nav.classList.remove("active"));
            resumes.forEach(resume => resume.classList.remove("active"));
    
            if (screenWidth <= 768) {  // Mobile view
                document.querySelector(".nav-link[data-target='comprehensive']").classList.add("active");
                document.getElementById("comprehensive").classList.add("active");
            } else {  // PC view
                document.querySelector(".nav-link[data-target='advanced']").classList.add("active");
                document.getElementById("advanced").classList.add("active");
            }
        }
    
        // Set active link on page load
        setActiveLinkBasedOnScreenSize();
    
        // Allow manual tab switching
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

    // Dark mode toggle
    document.getElementById("darkmode-toggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
