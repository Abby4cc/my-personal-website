document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        if (this.getAttribute('href').startsWith("#")) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        }
    });
});
