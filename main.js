const bar = document.getElementById('bars');
const nav = document.getElementById('nav');
const navParent = document.querySelector('.nav-parent');
const xmark = document.getElementById('xmark');
const navBtn = document.querySelectorAll('.nav-btn');

bar.addEventListener('click', function(e){
    navParent.style.display = "flex";
    bar.style.display = "none";
});

xmark.addEventListener('click', function(x){
    bar.style.display = "inline-block";
    navParent.style.display = "none"; 
});

const screenWidth = window.innerWidth;
if(screenWidth < 1024){
    navBtn.forEach(btn => {
    btn.addEventListener('click', () =>{
    bar.style.display = "inline-block";
    navParent.style.display = "none";
    });
});
}

