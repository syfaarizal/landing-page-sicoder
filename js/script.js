document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
            navList.classList.toggle('active');
    });
    
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
  
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
            
            document.querySelector('.navbar-container').classList.add('scrolled');
        } else {
            scrollToTopBtn.classList.remove('visible');
            document.querySelector('.navbar-container').classList.remove('scrolled');
        }
    });
  
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});