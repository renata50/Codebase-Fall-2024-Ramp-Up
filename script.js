 function hideAllSections() {
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => {
        section.classList.remove('visible');
    });
}

function showSection(sectionId) {
    hideAllSections();
    document.getElementById(sectionId).classList.add('visible');
}

document.getElementById('Freshmen').addEventListener('click', () => {
    showSection('freshmen-resources');
});

document.getElementById('Sophomore').addEventListener('click', () => {
    showSection('sophomore-resources');
});

document.getElementById('Junior').addEventListener('click', () => {
    showSection('junior-resources');
});

document.getElementById('Senior').addEventListener('click', () => {
    showSection('senior-resources');
});