// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menudagi link bosilganda menyuni yopish (mobil uchun qulaylik)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Inputlarni olish
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Oddiy validatsiya
    if (!name || !email || !message) {
        alert('Iltimos, ism, email va xabar maydonlarini to‘ldiring.');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('Iltimos, to‘g‘ri email manzil kiriting.');
        return;
    }

    // Simulyatsiya – yuborilgan deb hisoblaymiz
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yuborilmoqda...';
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Xabar yuborildi!';
        submitBtn.style.background = '#2e7d32';

        // Formani tozalash
        contactForm.reset();

        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Xabarni yuborish';
            submitBtn.style.background = '#1f2a44';
            submitBtn.disabled = false;
        }, 2500);
    }, 1500);
});

// ===== SMOOTH SCROLL (mobil brauzerlar uchun) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== BOSHQALAR: konsolga salom =====
console.log('✅ Firma sayti muvaffaqiyatli yuklandi!');