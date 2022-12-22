 const ul = document.querySelector('#header ul');
 const hamOpen = document.querySelector('.ham-open');
 const cancel = document.querySelector('.cancel');

 hamOpen.addEventListener('click', (e) => {
    ul.style.transform = 'translateX(-4%)';
    hamOpen.style.display = 'none'
    cancel.style.display = 'block'
 });

 cancel.addEventListener('click', (e) => {
    ul.style.transform = 'translateX(100%)';
    hamOpen.style.display = 'block'
    cancel.style.display = 'none'
 })