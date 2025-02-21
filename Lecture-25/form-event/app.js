
let formEl = document.querySelector('form');

formEl.addEventListener('submit' , function(event){
    event.preventDefault(); //reload
    console.log(event.target[0].value);
    console.log(event.target[1].value);
})