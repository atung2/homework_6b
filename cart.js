/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var cartItemList = '';

function newCartItem() {
    var savedCart = JSON.parse(localStorage.getItem('savedCart'));
    if (savedCart.length > 0) {
        let count = 0;
        document.getElementById('empty-cart-text').innerHTML= 'Your Cart';
        console.log("saved cart length: " + savedCart.length);
        var totalPrice = 0;
        for(let x of savedCart) {
        totalPrice = totalPrice + x.price;
        var htmlCode = `
         <div class='product-details-cart' id='cartItem${count}'>
                            <img class='cart-thumbnail' src=${x.image} alt=''/>
                            <div class='item-cart'>
                                <div class='cart-first-line'>
                                    <p class='playfair-20px'><strong>${x.name}</strong></p>
                                    <span onclick="removeItem(${count})"><img class='cancel-item-cart' src='assets/cancel.png' alt=''/></span>
                                </div>
                                <div class='cart-second-line'>
                                   <div class="product-rating-price">
                                       <p class="dropdowns"><strong>Color:</strong> ${x.color}</p>
                                    <img class="dropdown-sizing-cart" src="assets/color-no-arrow.png" alt='alt'/>
                                   </div>
                                   <div class='product-rating-price'>
                                       <p class="dropdowns-materials-cart"><strong>Material:</strong> ${x.material}</p>
                                    <img class="dropdown-sizing-cart" src="assets/material-no-arrow.png" alt='alt'/>
                                   </div>
                                </div>

                                <div class='cart-third-line'>
                                    <div class='cart-quantity'>
                                        <p class='playfair-16px'><strong>Quantity:</strong></p>
                                        <div class='adjust'>
                                            
                                            <p id="counter">${x.quantity}</p>
                                            
                                        </div>
                                    </div>
                                    <div class='cart-price'><p class='cart-price-text'>Price:   $${x.price}</p></div>
                                </div>
                            </div>
                        </div>`;
                        cartItemList = cartItemList + htmlCode;
                        count = count + 1;
                        }
    }
    else {
        document.getElementById('empty-cart-text').innerHTML= 'Your Cart is Empty';
    }
    totalPriceNumber = Number(totalPrice);
    document.getElementById('hero-container-cart-main').insertAdjacentHTML("beforeend", cartItemList);
}

function removeItem(count) {
    document.getElementById(`cartItem${count}`).remove();
    cart = JSON.parse(localStorage.getItem('savedCart'));
    cart.splice(count,1);
    localStorage.setItem('savedCart', JSON.stringify(cart));
    console.log("successfully removed");
    location.reload();
    alert('Item Removed');
   
}

function displayCartNumber() {
    var condition = JSON.parse(localStorage.getItem('savedCart')).length;
    console.log(condition);
    if (condition === 0) {
       document.getElementById('shopping-cart-number').style.display='none';
    }
    if (condition === 1) {
    document.getElementById('shopping-cart-number').src="assets/1.png";
    }
    if (condition===2) {
        document.getElementById('shopping-cart-number').src="assets/2.png";
    }
    if (condition===3) {
        document.getElementById('shopping-cart-number').src="assets/3.png";
    }
    if (condition===4) {
        document.getElementById('shopping-cart-number').src="assets/more.png";
    }
    document.getElementById('shopping-cart-number').style.display='block';
}

