const nav_parent = document.querySelectorAll(".nav-parent");

nav_parent.forEach(function (nav_parent) {
    // select href from nav-parent
    const ancors = nav_parent.querySelectorAll("a");
    ancors.forEach(function (ancor) {
        // check if href is equal to current url
        const href = ancor.getAttribute("href");
        if (href == window.location.href) {
            // add class active to nav-parent
            nav_parent.classList.add("nav-expanded");
            nav_parent.classList.add("nav-active");
            ancor.parentElement.classList.add("nav-active");
        }
    });
});
