
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textContent = "↑";
scrollToTopBtn.classList.add("scroll-to-top-btn");
document.body.appendChild(scrollToTopBtn);

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.testimonial-img').forEach(img => {
    img.addEventListener('click', function () {
        openModal(this.src);
    });
});

function openModal(imageSrc) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.textContent = "×";
    closeBtn.onclick = function () {
        modal.remove();
    };
    
    const modalImage = document.createElement('img');
    modalImage.src = imageSrc;
    
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalImage);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}
