const newFormHandler = async(event) => {
    event.preventDefault();

    // const name = document.querySelector('#custom-name').value.trim();
    const question = document.querySelector('#custom-question').value.trim();
    const correct_answer = document
        .querySelector('#custom-answer')
        .value.trim();
    const waOne = document
        .querySelector('#custom-waOne')
        .value.trim();
    const difficulty = document
        .querySelector('#custom-difficulty')
        .value.trim();
    const waTwo = document.querySelector('#custom-waTwo').value.trim();
    const waThree = document.querySelector('#custom-waThree').value.trim();

    if (difficulty && question && correct_answer && waOne && waTwo && waThree) {
        const response = await fetch('/api/customs', {
            method: 'POST',
            body: JSON.stringify({
                // name,
                difficulty,
                question,
                correct_answer,
                waOne,
                waTwo,
                waThree,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create project');
        }
    }
};

const delButtonHandler = async(event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/customs/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
        }
    }
};

document
    .querySelector('.new-custom-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('#custom-list-parent')
    .addEventListener('click', delButtonHandler);