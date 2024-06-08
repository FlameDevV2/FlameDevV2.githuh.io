document.addEventListener('mousemove', function(e) {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.05;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.05;

    document.body.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
});
