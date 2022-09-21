let landingPage = document.querySelector('.landing-section')
let imgs = [
    "l1.webp",
    "l2.webp",
    "l3.webp",
    "l4.webp",
]
setInterval(() => {
    let randVar = Math.floor(Math.random() * imgs.length);
    landingPage.style.backgroundImage = 'url("images/' + imgs[randVar] + '")';
    
},15000)
//-----------------------
let list = document.querySelectorAll('.list');
let boxs = document.querySelectorAll('.boxshuffle');
for(let i = 0; i<list.length;i++){
    list[i].addEventListener('click',function(){
        for(let j=0;j<list.length;j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');
        let dataFilter = this.getAttribute('data-filter');
        for(let k=0;k<boxs.length;k++){
            boxs[k].classList.remove('active');
            boxs[k].classList.add('hide');
            if(boxs[k].getAttribute('data-item')== dataFilter || dataFilter == "all"){
                boxs[k].classList.remove('hide');
                boxs[k].classList.add('active');
            }
        }
    })
};
let dropdownBtn = document.querySelector('.menu-btn');
let menuContent = document.querySelector('.menu-content');
dropdownBtn.addEventListener('click',()=>{
    if(menuContent.style.display===""){
        menuContent.style.display="block";
    } else {
        menuContent.style.display="";
    }
});
//-----------------------