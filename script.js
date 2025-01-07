document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.header .navbar');
    const menuBtn = document.querySelector('#menu-btn');

    if (menuBtn && navbar) {
        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('active'); 
        });

        navbar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
            });
        });
    } else {
        console.error("Navbar or Menu Button not found!");
    }
});

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick =() =>
    {
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})