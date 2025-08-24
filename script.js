let stars =document.getElementById('stars')
let moon =document.getElementById('moon')
let mountains3 =document.getElementById('mountains3')
let mountains4 =document.getElementById('mountains4')
let river =document.getElementById('river')
let boat =document.getElementById('boat')
let eljoker =document.querySelector('.eljoker')

window.onscroll=function(){
    let value = scrollY;
    stars.style.left = value + 'px'
    moon.style.top = value * 3 + 'px'
    mountains3.style.top = value * 1.5  + 'px'
    mountains4.style.top = value * 1.2  + 'px'
    river.style.top = value  + 'px'
    boat.style.top = value  + 'px'
    boat.style.left = value * 3 + 'px'
    eljoker.style.fontSize = value  + 'px'
    if(scrollY >= 80){  
        eljoker.style.fontSize = 80  + 'px';
        eljoker.style.position= 'fixed';
        if(scrollY >= 500){
            eljoker.style.display= "none";
        }else{
            eljoker.style.display= "block";
        }
        if(scrollY>= 214){
            document.querySelector('.main').style.background ='linear-gradient(#376281 , #10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016 , #10001f)'
        }

    }
}