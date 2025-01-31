const cartbtn = document.querySelectorAll(".cartbtn");
const cartItemContainer = document.querySelector(".cart-items");
// const quantitybtn = document.querySelectorAll(".quantitybtn")

const kolPara = document.querySelectorAll(".kol")

const kolicina = document.getElementById("kolicina");
const smanji = document.querySelectorAll(".smanji")
const uvecaj = document.querySelectorAll(".uvecaj")

uvecaj.forEach((x, index) => {
    let kol = 1;
    console.log(kolPara.textContent)
    x.addEventListener('click', () => {
       
        kol++;
        kolPara[index].textContent = kol;
        
    })
})

smanji.forEach((x, index) => {
    const parentDiv = x.closest('.item');
    const quantitybtn = parentDiv.querySelector(".quantitybtn")
    const cartbtn = parentDiv.querySelector(".cartbtn")
    
    x.addEventListener('click', () =>{
        let kol = kolPara[index].textContent
        if(kol>1){
            kol--
            kolPara[index].textContent = kol;
            console.log(kol)
        } else {
            kolPara[index].textContent = 0;
            quantitybtn.classList.add("hidden")
            cartbtn.classList.remove("hidden")
        }
    })
})


cartbtn.forEach((btn) => {
        btn.addEventListener('click', () => {
        const parentDiv = btn.closest('.item');
        const itemQuantity = parentDiv.querySelector(".kol").textContent
        const quantitybtn = parentDiv.querySelector(".quantitybtn")  // u quantityBtn se sprema .quantityBtn klasa u pojedinom item elementu, esentially zamjena za queryselectorall
        btn.classList.add("hidden"); 
        
        const itemName = parentDiv.querySelector(".item-name").textContent;
        const itemPrice = parentDiv.querySelector(".item-price").textContent;
        const itemTotal = itemQuantity * itemPrice;
        
        // Izrada novog diva
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `<div class="cart-stavka">
        <h5 class='cart-item-name'>${itemName}</h5>
        <div class='cart-stavka-cijena'><h6 class='cart-item-ammount'> <strong>${itemQuantity}</strong> @ ${itemPrice} ${itemTotal}</h6>
                             </div> </div>`
       
        
        cartItemContainer.appendChild(cartItem);

        if(quantitybtn){ // AKO quantitybtn postoji onda napravi ↓
            quantitybtn.classList.remove("hidden")
        }


    })
})




