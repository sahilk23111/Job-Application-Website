document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('application-form');
    const applicationsList = document.getElementById('applications-list');

    // Load existing applications from local storage
    const loadApplications = () => {
        const applications = JSON.parse(localStorage.getItem('applications')) || [];
        applicationsList.innerHTML = '';
        applications.forEach(app => {
            const appElement = document.createElement('div');
            appElement.className = 'application-item';
            appElement.innerHTML = `
                <strong>Name:</strong> ${app.name}<br>
                <strong>Email:</strong> ${app.email}<br>
                <strong>Resume:</strong> <p>${app.resume}</p>
            `;
            applicationsList.appendChild(appElement);
        });
    };

    loadApplications();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('applicant-name').value;
        const email = document.getElementById('email').value;
        const resume = document.getElementById('resume').value;

        const newApplication = { name, email, resume };

        // Save to local storage
        const applications = JSON.parse(localStorage.getItem('applications')) || [];
        applications.push(newApplication);
        localStorage.setItem('applications', JSON.stringify(applications));

        // Add to list
        const appElement = document.createElement('div');
        appElement.className = 'application-item';
        appElement.innerHTML = `
            <strong>Name:</strong> ${name}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Resume:</strong> <p>${resume}</p>
        `;
        applicationsList.appendChild(appElement);

        // Clear form
        form.reset();
    });
});

