const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');



/* Declaring the array of image filenames */
const pics = ["./images/sbpic1.jpg","./images/sbpic2.jpg","./images/sbpic3.jpg","./images/sbpic4.jpg","./images/sbpic5.jpg"];
/* Declaring the alternative text for each image file */
const alts = ["friends on beach","more friends on beach","bigg smiles","roomies","sunset pic"];
/* Looping through images */
for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', pics[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click",()=>{
        displayedImage.setAttribute('src', pics[i]);
        displayedImage.setAttribute('alt', alts[i]);
    });
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener ('click', ()=>{
    const button = btn.getAttribute("class");
    if (button == "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%";  
    }
})
