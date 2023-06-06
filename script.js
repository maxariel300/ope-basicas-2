const fieldsetContenedor = document.querySelector ("fieldset");

const IMG_1 = "https://pm1.narvii.com/7119/b0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_hq.jpg"
const IMG_2 = "https://i.pinimg.com/736x/f0/0d/ae/f00dae40fa38727e2ab1eaa4760f2e6c.jpg"
const IMG_3 = "https://i.pinimg.com/736x/2a/28/5a/2a285af8af62a57709571a27f88dabe7.jpg"

let imagenActual = 1

function agregarImg() {
    let imgLink;

   if (imagenActual === 1) {
        imgLink = IMG_1;
        imagenActual = 2;
   } else if (imagenActual === 2) {
        imgLink = IMG_2
        imagenActual = 3;
   } else {
    imgLink = IMG_3
    imagenActual = 1;
   }

fieldsetContenedor.innerHTML += `
<img src="${imgLink}" alt="test">
`;

}

function quitarImg() {
    fieldsetContenedor.innerHTML -=
    `
    <img src="${imgLink}" alt="test">`;
    
}