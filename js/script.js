let image = document.getElementById('qrImg');
let inp = document.getElementById('text-field');
let paragraph = document.getElementById('para');


let genQrcode = async(inp) =>{
    image.src = await `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp.value}`;
    image.style.border = "2px solid black"; 
    paragraph.innerHTML= `Your input: ${inp.value}`
    inp.value = ""
}


function getQrcode(){
    let inpt = inp;
    genQrcode(inpt)
}