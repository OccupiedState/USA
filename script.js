const articles = [
  {
    title: "THE THIRD LEAK",
    date: "09 DECEMBER 2025",
    file: "articles/third-leak.html",
    preview: "1,088,000 unaccompanied minors vanished from public records. Handed to strangers with zero vetting. Delivered to abandoned strip malls and slaughterhouses. The full 41,000-file HHS contractor dump, with mirrors and torrents…"
  },
  {
    title: "THE SECOND LEAK",
    date: "15 DECEMBER 2025",
    file: "articles/second-leak.html",
    preview: "10.3 million encounters. 2.1 million known got-aways. 73,000 Special Interest Aliens. 40,000+ QR-coded military-age males. Nightly camera blackouts. Terrorist watchlist boxes quietly unchecked. The raw CBP spreadsheets before they scrubbed them forever…"
  },
  {
    title: "THE FIRST LEAK",
    date: "06 DECEMBER 2025",
    file: "articles/first-leak.html",
    preview: "From Facebook’s secret sadness experiments to TikTok’s Beijing backdoors — the complete timeline of how they turned your phone into a digital concentration camp. Every smoking-gun document, mirrored and seeded…"
  }
];

const list = document.getElementById('article-list');
const searchInput = document.getElementById('search-box');

function render(results = articles) {
  list.innerHTML = '';
  if (!results.length) {
    list.innerHTML = '<p style="text-align:center;color:#0a8">No dispatches match your search.</p>';
    return;
  }
  results.forEach(a => {
    list.innerHTML += `
      <li class="article">
        <h3><a href="${a.file}">${a.title}</a></h3>
        <div class="date">${a.date}</div>
        <p class="preview">${a.preview}</p>
        <a href="${a.file}">Read the dispatch →</a>
      </li>`;
  });
}

searchInput?.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  if (!q) return render();
  const matches = articles.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.preview.toLowerCase().includes(q) ||
    a.date.includes(q)
  );
  render(matches);
});

render();
