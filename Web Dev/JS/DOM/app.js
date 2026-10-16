// let smallImage=document.getElementsByClassName("oldImg");
// for(let i=0;i<smallImage.length;i++){
//     smallImage[i].src="assets/spiderman_img.png";
//     console.log(`value of image no ${i} changed`);
    
// }

// let links=document.querySelectorAll(".box a");
// for(let i=0;i<links.length;i++){
//     links[i].style.color="yellow";
// }


let para1=document.createElement("p");
para1.innerText="Hey I'm red";
document.querySelector('body').append(para1);

para1.classList.add('red');


let h3=document.createElement("h3");
h3.innerText="I'm blue h3!";
document.querySelector('body').append(h3);

h3.classList.add('blue');


let div =document.createElement("div");
let h1=document.createElement("h1");
let para=document.createElement("p");
h1.innerText="I'm in a div"
para.innerText="me too"
div.append(h1);
div.append(para);
div.classList.add('box');

document.querySelector('body').append(div);
