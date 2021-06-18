const footer_share = document.querySelector('.footer_share');



footer_share.addEventListener('mouseenter', function(){
    footer_share.classList.add('hover');
});
footer_share.addEventListener('mouseleave', function(){
    footer_share.classList.remove('hover');
})
