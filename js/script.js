let icon = document.querySelectorAll('.social__wrapper');

icon.forEach(hoverEffect);

function hoverEffect (item) {
    let icon = item.querySelector('.fab');

    item.addEventListener('mouseenter', function(){
        icon.classList.add('icon-hover');
    })

    item.addEventListener('mouseleave', function(){
        icon.classList.remove('icon-hover');
    })
}