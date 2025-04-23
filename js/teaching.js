// Teaching data and rendering logic
document.addEventListener('DOMContentLoaded', function() {
    // Sample courses data
    // In a real implementation, this could be loaded from a JSON file
    const courses = [
        {
            title: "Course Title 1",
            code: "CS 101",
            semester: "Fall 2023",
            description: "An introductory course covering fundamental concepts in...",
            links: [
                { icon: "fas fa-external-link-alt", text: "Course Page", url: "teaching/course1.html" },
                { icon: "fas fa-file-alt", text: "Syllabus", url: "teaching/syllabi/course1_syllabus.pdf" }
            ]
        },
        {
            title: "Course Title 2",
            code: "CS 202",
            semester: "Spring 2023",
            description: "An advanced course exploring the principles of...",
            links: [
                { icon: "fas fa-external-link-alt", text: "Course Page", url: "teaching/course2.html" },
                { icon: "fas fa-file-alt", text: "Syllabus", url: "teaching/syllabi/course2_syllabus.pdf" }
            ]
        },
        {
            title: "Course Title 3",
            code: "CS 303",
            semester: "Fall 2022",
            description: "A specialized course focusing on recent developments in...",
            links: [
                { icon: "fas fa-external-link-alt", text: "Course Page", url: "teaching/course3.html" },
                { icon: "fas fa-file-alt", text: "Syllabus", url: "teaching/syllabi/course3_syllabus.pdf" }
            ]
        }
    ];

    // Function to render courses
    function renderCourses(courses, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        courses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.className = 'course';

            const titleElement = document.createElement('h3');
            titleElement.className = 'course-title';
            titleElement.textContent = `${course.code}: ${course.title}`;

            const semesterElement = document.createElement('p');
            semesterElement.className = 'course-semester';
            semesterElement.textContent = course.semester;

            const descriptionElement = document.createElement('p');
            descriptionElement.className = 'course-info';
            descriptionElement.textContent = course.description;

            const linksElement = document.createElement('div');
            linksElement.className = 'course-links';

            course.links.forEach(link => {
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

            courseElement.appendChild(titleElement);
            courseElement.appendChild(semesterElement);
            courseElement.appendChild(descriptionElement);
            courseElement.appendChild(linksElement);

            container.appendChild(courseElement);
        });
    }

    // Render courses on the homepage
    renderCourses(courses, 'course-list');
});