console.log(`Hello, there!`);

const message = document.getElementById(`message`);


const addMovie = event =>{
    event.preventDefault();

    inputField = document.querySelector(`input`);

    let movie = document.createElement(`li`);

    let movieTitle = document.createElement('span');

    movieTitle.textContent = inputField.value;

    movie.addEventListener(`click`,(crossoffMovie))

    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement(`button`);

    deleteBtn.textContent = `x`;

    deleteBtn.addEventListener(`click`,(deleteMovie));

    movie.appendChild(deleteBtn);

    document.querySelector(`ul`).appendChild(movie);

    inputField.value = ``;
}

document.querySelector(`form`).addEventListener(`submit`, addMovie);

const crossoffMovie = event =>{
    event.target.classList.toggle(`checked`);
    
    if(event.target.classList.contains(`checked`)){
        message.textContent = `Movie watched!`;
    }
    else{
        message.textContent = `Movie added back!`
    }
}

const deleteMovie = event => {
    event.target.parentNode.remove();
    message.textContent = `Movie Deleted!`
}

