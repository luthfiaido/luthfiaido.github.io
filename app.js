const closed_face = document.querySelector('.closed');
const open_face = document.querySelector('.open');

//add event listener
closed_face.addEventListener('click', () => { 
    if(open_face.classList.contains('open')){
        open_face.classList.add('active');
        closed_face.classList.remove('active');
    }
});
open_face.addEventListener('click', () => { 
    if(open_face.classList.contains('active')){
        open_face.classList.remove('active');
        closed_face.classList.add('active');
    }
});
