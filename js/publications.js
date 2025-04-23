// Publications data and rendering logic
document.addEventListener('DOMContentLoaded', function() {
    // Sample featured publications data
    // In a real implementation, this could be loaded from a JSON file
    const featuredPublications = [
        {
            title: "TiP4GEN: Text to Immersive Panorama 4D Scene Generation",
            authors: "Ke Xing, Hanwen Liang, Dejia Xu, Yuyang Yin, Konstantinos N. Plataniotis, Yao Zhao, Yunchao Wei ",
            venue: "ACMMM 2025 Conference Submission",
            type: "conference",
            // abstract: "In this work, we demonstrate a novel approach to...",
            links: [
                // { icon: "fas fa-file-pdf", text: "PDF", url: "papers/paper2.pdf" },
                // { icon: "fab fa-github", text: "Code", url: "https://github.com/yourusername/project2" },
                // { icon: "fas fa-external-link-alt", text: "Publisher", url: "https://doi.org/example2" }
            ]
        },
        {
            title: "Beyond Wide-Angle Images: Unsupervised Video Portrait Correction via Spatiotemporal Diffusion Adaptation",
            authors: "Wenbo Nie, Lang Nie, Chunyu Lin, Jingwen Chen, KeXing, JiYuan Wang, Yao Zhao ",
            venue: "ICCV 2025 Conference Submission",
            type: "conference",
            //abstract: "This workshop paper explores preliminary results on...",
            links: [
                // { icon: "fas fa-file-pdf", text: "PDF", url: "papers/workshop1.pdf" },
                // { icon: "fas fa-external-link-alt", text: "Publisher", url: "https://doi.org/example-workshop" }
            ]
        },
        {
            title: "Exploring the sequence-function space of microbial fucosidases",
            authors: "Ana Martínez Gascueña, Haiyang Wu, Rui Wang, C David Owen, Pedro J Hernando, Serena Monaco, Matthew Penner, Ke Xing, Gwenaelle Le Gall, Richard Gardner, Didier Ndeh, Paulina A Urbanowicz, Daniel IR Spencer, Martin Walsh, Jesus Angulo, Nathalie Juge",
            venue: "Communications Chemistry, 2024",
            type: "journal",
            //abstract: "This paper presents groundbreaking research in the field of...",
            links: [
                //{ icon: "fas fa-file-pdf", text: "PDF", url: "papers/paper1.pdf" },
                //{ icon: "fab fa-github", text: "Code", url: "https://github.com/yourusername/project1" },
                //{ icon: "fas fa-globe", text: "Project Page", url: "../projects/project1.html" },
                { icon: "fas fa-external-link-alt", text: "Publisher", url: "https://www.nature.com/articles/s42004-024-01212-4" }
            ]
        }

    ];

    // Function to render publications
    function renderPublications(publications, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        publications.forEach(pub => {
            const pubElement = document.createElement('div');
            pubElement.className = 'publication';

            const titleElement = document.createElement('h3');
            titleElement.className = 'publication-title';
            titleElement.textContent = pub.title;

            const authorsElement = document.createElement('p');
            authorsElement.className = 'publication-authors';
            authorsElement.textContent = pub.authors;

            const venueElement = document.createElement('p');
            venueElement.className = 'publication-venue';
            venueElement.textContent = pub.venue;

            const linksElement = document.createElement('div');
            linksElement.className = 'publication-links';

            pub.links.forEach(link => {
                const linkElement = document.createElement('a');
                linkElement.href = link.url;
                linkElement.target = '_blank';
                linkElement.rel = 'noopener noreferrer';
                
                const iconElement = document.createElement('i');
                iconElement.className = link.icon;
                
                linkElement.appendChild(iconElement);
                linkElement.appendChild(document.createTextNode(' ' + link.text));
                
                linksElement.appendChild(linkElement);
            });

            pubElement.appendChild(titleElement);
            pubElement.appendChild(authorsElement);
            pubElement.appendChild(venueElement);
            pubElement.appendChild(linksElement);

            container.appendChild(pubElement);
        });
    }

    // Render featured publications on the homepage
    renderPublications(featuredPublications, 'publication-list');
});