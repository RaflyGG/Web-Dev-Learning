// ==========================================
// 1. DATA DESTINASI (Objek JavaScript)
// ==========================================
// SWE Best Practice: Simpan data informasi tiket ke dalam Objek (Dictionary)
const infoTiket = {
    "Kawah Putih Ciwidey": {
        lokasi: "Ciwidey, Bandung Selatan",
        harga: "Rp 30.000 (Domestik) / Rp 81.000 (Mancanegara)",
        jam: "07:30 - 17:00 WIB",
        desc: "Danau kawah vulkanik alami dengan air belerang putih kehijauan. Disediakan shuttle ontang-anting untuk naik ke kawah."
    },
    "Jalan Braga": {
        lokasi: "Sumur Bandung, Kota Bandung",
        harga: "Gratis (Area Publik)",
        jam: "Buka 24 Jam",
        desc: "Pusat kawasan bersejarah dengan arsitektur art-deco kolonial Belanda, kafe kopi legendaris, dan galeri lukisan jalanan."
    },
    "Tangkuban Perahu": {
        lokasi: "Lembang, Bandung Barat",
        harga: "Rp 35.000 (Weekday) / Rp 40.000 (Weekend)",
        jam: "08:00 - 17:00 WIB",
        desc: "Gunung berapi aktif dengan kawah raksasa Kawah Ratu. Udara sangat sejuk dan terdapat banyak kios suvenir lokal."
    },
    "Tebing Keraton": {
        lokasi: "Ciburial, Cimenyan",
        harga: "Rp 15.000 / orang",
        jam: "05:00 - 18:00 WIB",
        desc: "Spot terbaik menikmati sunrise di Bandung dengan latar lautan kabut pagi dan hamparan hutan pinus Taman Hutan Raya."
    },
    "Orchid Forest Cikole": {
        lokasi: "Lembang, Bandung Barat",
        harga: "Rp 50.000 / orang",
        jam: "09:00 - 18:00 WIB",
        desc: "Taman konservasi anggrek terbesar di Indonesia di tengah hutan pinus asri, dilengkapi jembatan kayu bercahaya (Sky Bridge)."
    },
    "Floating Market": {
        lokasi: "Lembang, Bandung Barat",
        harga: "Rp 35.000 (Dapat ditukar minuman selamat datang)",
        jam: "09:00 - 18:00 WIB",
        desc: "Wisata danau keluarga dengan konsep unik pasar terapung yang menjual aneka jajanan tradisional khas Sunda dari perahu."
    }
};

// ==========================================
// 2. DOM SELECTION (Ambil Elemen HTML)
// ==========================================
const modal = document.getElementById('ticketModal');
const closeBtn = document.getElementById('closeModalBtn');
const modalTitle = document.getElementById('modalTitle');
const modalLocation = document.getElementById('modalLocation');
const modalPrice = document.getElementById('modalPrice');
const modalHours = document.getElementById('modalHours');
const modalDesc = document.getElementById('modalDesc');

// Ambil SEMUA tombol kartu "Lihat Detail →"
const detailButtons = document.querySelectorAll('.card-btn');

// ==========================================
// 3. EVENT LISTENER (Dengarkan Klik)
// ==========================================

// Loop untuk memasang pendengar klik di setiap tombol kartu
detailButtons.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        // Mencegah link meloncat ke atas halaman
        event.preventDefault();

        // Ambil judul tempat wisata dari kartu yang diklik
        const card = btn.closest('.card');
        const title = card.querySelector('.card-title').textContent.trim();

        // Cari datanya di kamus infoTiket
        const data = infoTiket[title];

        if (data) {
            // Isi teks modal dengan data yang cocok
            modalTitle.textContent = title;
            modalLocation.textContent = data.lokasi;
            modalPrice.textContent = data.harga;
            modalHours.textContent = data.jam;
            modalDesc.textContent = data.desc;

            // Buka modal dengan menambah class 'active'
            modal.classList.add('active');
        }
    });
});

// Tutup modal saat tombol (X) diklik
closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
});

// Tutup modal jika user mengklik area gelap di luar kotak modal
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});