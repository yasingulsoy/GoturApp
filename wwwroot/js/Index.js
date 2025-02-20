
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Slide gösterme fonksiyonu
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active-slide');
            if (i === index) {
                slide.classList.add('active-slide');
            }
        });
        }

    // Bir sonraki slide'a geçiş
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
        }

    // Bir önceki slide'a geçiş
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
        }

        // Klavye ok tuşlarını dinleme
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
        nextSlide();
            } else if (event.key === 'ArrowLeft') {
        prevSlide();
            }
        });

    // Otomatik geçiş
    setInterval(nextSlide, 5000); // Her 5 saniyede bir slide değişimi

    // Sepet ikonunu ve sepeti açma kapama işlevselliği
    const cartIcon = document.getElementById('cart-icon');
    const cart = document.getElementById('cart');
    const closeCart = document.getElementById('close-cart');

        // Sepet ikonuna tıklandığında sepeti aç
        cartIcon.addEventListener('click', (event) => {
        event.preventDefault(); // Linkin varsayılan davranışını engelle
    cart.style.right = '0'; // Sepeti göster
        });

        // Sepeti kapat
        closeCart.addEventListener('click', () => {
        cart.style.right = '-300px'; // Sepeti gizle
        });
