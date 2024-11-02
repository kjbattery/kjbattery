// Script bisa digunakan untuk fitur tambahan, jika perlu
console.log("Selamat datang di Kembar Jaya Battery!");

// Animasi saat di-scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) { // Aktifkan animasi saat scroll lebih dari 50px
        header.classList.add("scrolled-header");
    } else {
        header.classList.remove("scrolled-header");
    }
});
