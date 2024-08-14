// Define the toTop function in the global scope
const toTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

document.addEventListener("keydown", function (event){
    if (event.ctrlKey){
       event.preventDefault();
    }
    if(event.keyCode == 123){
       event.preventDefault();
    }
});
document.addEventListener('contextmenu', event => event.preventDefault())