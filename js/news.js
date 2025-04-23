// Sample news data
const newsData = [
    {
        date: "2023-10-01",
        title: "New Research Paper Published",
        content: "Our latest research on AI has been published in Nature Journal.",
        link: "https://example.com/news/1"
    },
    {
        date: "2023-09-25", 
        title: "Invited Talk at AI Conference",
        content: "I will be giving a talk at the International AI Conference next month.",
        link: "https://example.com/news/2"
    }
];

// Function to render news
function renderNews() {
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = newsData.map(news => `
        <div class="news-item">
            <div class="news-date">${news.date}</div>
            <h3 class="news-title">${news.title}</h3>
            <p class="news-content">${news.content}</p>
            <a href="${news.link}" class="news-link">Read More</a>
        </div>
    `).join('');
}

// Initialize news on page load
document.addEventListener('DOMContentLoaded', renderNews);