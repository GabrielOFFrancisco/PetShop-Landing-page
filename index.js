let questionParagraph = document.querySelectorAll('.question');

questionParagraph.forEach((question) => {
    question.addEventListener('click', () =>{
        question.classList.toggle('active');
    });
});