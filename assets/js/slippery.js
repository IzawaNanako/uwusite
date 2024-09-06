const image = document.querySelector('img');

document.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * 15);
    const sourceName = '../imgs/' + randomIndex + '.jpg';                                                                                                                                     
    image.src = sourceName;
});