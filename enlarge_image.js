
document.querySelectorAll('.three_image img').forEach(image =>{
    image.onclick=()=>{
    document.querySelector('.popup-img').style.display='block';
    document.querySelector('.popup-img img').src=image.getAttribute("src");}
});

document.querySelectorAll('.two_image img').forEach(image =>{
    image.onclick=()=>{
    document.querySelector('.popup-img').style.display='block';
    document.querySelector('.popup-img img').src=image.getAttribute("src");}
});
document.querySelector('.popup-img span').onclick=()=>{
    document.querySelector('.popup-img').style.display="none";
}