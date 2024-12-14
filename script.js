// Kitaplar dizisi
var books = [
    { title: "07-Ghost", link: "manga/07-Ghost.html" },
    { title: ".hack//G.U.+" , link: ".hack-GU.html" },
    { title: "Accel World", link: "Accel-World.html" },
    { title: "Baccano!", link: "Baccano.html" },
    { title: "Code Geass: Lelouch of the Rebellion", link: "Code-Geass.html" },
    { title: "Himitsu no AiPri", link: "anime/Himitsu no AiPri.html" }
];

const fuse = new Fuse(books, {
    keys: ["title"]
});

// Arama fonksiyonu
function searchBooks() {
    const query = document.getElementById('searchInput').value.trim();
    const resultsContainer = document.getElementById('searchResults');
    const resultsList = document.getElementById('searchResultsList');

    // Eğer kutu boşsa, sonuçları gizle
    if (query === '') {
        resultsContainer.style.display = 'none';
        resultsList.innerHTML = '';  // Sonuçları temizle
        return;
    }

    // Yazı varsa, sonuçları göster
    resultsContainer.style.display = 'block';

    // Arama sonuçlarını al
    const results = fuse.search(query);

    // Sonuçları ekle
    resultsList.innerHTML = results.map(result => {
        return `
            <div class="col-12 col-md-4">
                <div class="book-item">
                    <a href="${result.item.link}" class="text-decoration-none">
                        <h3>${result.item.title}</h3>
                    </a>
                </div>
            </div>
        `;
    }).join('');
}