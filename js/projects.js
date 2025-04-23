// Projects data and rendering logic
document.addEventListener('DOMContentLoaded', function() {
    // Sample projects data
    // In a real implementation, this could be loaded from a JSON file
    const featuredProjects = [
        {
            title: "Example Project 1",
            description: "A brief description of your first project and its significance.",
            date: "2022 - Present",
            image: "assets/images/project1.jpg",
            links: [
                { icon: "fab fa-github", text: "Code", url: "https://github.com/yourusername/project1" },
                { icon: "fas fa-globe", text: "Demo", url: "https://demo-link.com/project1" },
                { icon: "fas fa-file-alt", text: "Paper", url: "publications/papers/paper1.pdf" }
            ]
        },
        {
            title: "Example Project 2",
            description: "A brief description of your second project and its significance.",
            date: "2021 - 2022",
            image: "assets/images/project2.jpg",
            links: [
                { icon: "fab fa-github", text: "Code", url: "https://github.com/yourusername/project2" },
                { icon: "fas fa-globe", text: "Demo", url: "https://demo-link.com/project2" }
            ]
        },
        {
            title: "Example Project 3",
            description: "A brief description of your third project and its significance.",
            date: "2020 - 2021",
            image: "assets/images/project3.jpg",
            links: [
                { icon: "fab fa-github", text: "Code", url: "https://github.com/yourusername/project3" },
                { icon: "fas fa-file-alt", text: "Paper", url: "publications/papers/paper3.pdf" }
            ]
        }
    ];

    // Function to render projects
    function renderProjects(projects, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project';

            const titleElement = document.createElement('h3');
            titleElement.className = 'project-title';
            titleElement.textContent = project.title;

            const descriptionElement = document.createElement('p');
            descriptionElement.className = 'project-description';
            descriptionElement.textContent = project.description;

            const dateElement = document.createElement('p');
            dateElement.className = 'project-date';
            dateElement.textContent = project.date;

            const linksElement = document.createElement('div');
            linksElement.className = 'project-links';

            project.links.forEach(link => {
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

            projectElement.appendChild(titleElement);
            projectElement.appendChild(descriptionElement);
            projectElement.appendChild(dateElement);
            projectElement.appendChild(linksElement);

            container.appendChild(projectElement);
        });
    }

    // Render featured projects on the homepage
    renderProjects(featuredProjects, 'project-list');
});