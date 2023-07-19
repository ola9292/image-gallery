let currentImg = document.getElementById('currentImg');
let selectedImgs = document.querySelectorAll('.imgs')


selectedImgs.forEach(img => {
    img.addEventListener('click',function(e){

        //reset opacity on every click
        selectedImgs.forEach((img)=>{
            return img.style.opacity = 1;
        })

        //change src attr of current img
       currentImg.src = e.target.src;

       //change opacity of clicked img
       e.target.style.opacity = 0.4;
    })
});