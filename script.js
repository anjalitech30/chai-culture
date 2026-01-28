document.getElementById('inviteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    this.style.opacity = '0';
    setTimeout(() => {
        this.style.display = 'none';
        const msg = document.getElementById('thankYou');
        msg.style.display = 'block';
    }, 400);
});