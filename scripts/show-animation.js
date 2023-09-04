const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.landing-page-title, .landing-page-subtitle, .about-me-title, .about-me-description, .here-for-more, .animation-1, .animation-2, .animation-3, .animation-4, .experience-title, .list-student, .tech-member, .volunteer-1, .volunteer-2, .university-list, .highschool-list, .primary-school-1, .primary-school-2, .projects-title, .first-website, .segmente, .bedeveloper-romania, .multiverse, .lego, .ppt-presentation, .certificates-list, .skills-list, .certificates-skills-title');
hiddenElements.forEach((el) => observer.observe(el));