
// Open Overlay on Cart Button (Not Implemented

// function openCart() {
//  document.getElementById("overlay").style.display = "inline-flex";
// }

// function closeCart() {
//  document.getElementById("overlay").style.display = "none";
// }

//Adjust Count

function addToCart(productName, productColor, productMaterial, productQuantity, productImage, productPrice){
   const newItem = new Product (productName, productColor, productMaterial, productQuantity, productImage, productPrice);
   var cart;
   if(!localStorage.getItem('savedCart')){
       cart = [];
       cart.push(newItem);
       localStorage.setItem('savedCart', JSON.stringify(cart));
   }
   else{
       cart = JSON.parse(localStorage.getItem('savedCart'));
       cart.push(newItem);
       localStorage.setItem('savedCart', JSON.stringify(cart));
   }
   
}


var counter = 1;

function addQuantity() {
    
    counter = counter + 1;
    document.getElementById("counter").innerHTML = counter;
    console.log(counter);
    return counter;
   
}


function removeQuantity() {
    counter = counter - 1;
    if (counter < 1) {
        counter = 1;
    }
    document.getElementById("counter").innerHTML = counter;
    console.log(counter);
    return counter;
}


//Change Picture Display

function displayPicture(box){
	
	var pillowPicture = new Array(3);
        
	pillowPicture[0] = "assets/bombay.jpg";
	pillowPicture[1] = "assets/amsterdam.jpg";
	pillowPicture[2] = "assets/silk linen 2.jpg";
	pillowPicture[3] = "assets/whitepillow.jpg";
	document.getElementById('product-image').src = pillowPicture[parseInt(box.value)];
	}
        
        
//Change the Number in Cart
function displayCartNumber() {
	if (!localStorage.getItem('savedCart')){
	       cart = [];
	       localStorage.setItem('savedCart', JSON.stringify(cart));
	}
	else {
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
}







function Product(productName, productColor, productMaterial, productQuantity, productPrice, productImage){
    this.name = productName;
    this.color = productColor;
    this.material = productMaterial;
    this.quantity = productQuantity;
    this.price = productPrice;
    this.image = productImage;
}


function addToCart(productName, productColor, productMaterial, productQuantity, productImage, productPrice){
    const newItem = new Product (productName, productColor, productMaterial, productQuantity, productImage, productPrice);
    var cart;
    if(!localStorage.getItem('savedCart')){
        cart = [];
        cart.push(newItem);
        localStorage.setItem('savedCart', JSON.stringify(cart));
    }
    else{
        cart = JSON.parse(localStorage.getItem('savedCart'));
        cart.push(newItem);
        localStorage.setItem('savedCart', JSON.stringify(cart));
    }
    
}

function setColorId () {
    for (var i = 0; i < document.form1.color.length; i++) {
        if (document.form1.color[i].checked)  {
            if (document.form1.color[i].value == 0) {
                var productColor = "School Special";
                //var productImage = "assets/bombay.jpg";
            }
            if (document.form1.color[i].value == 1) {
                var productColor = "Morning Haze";
                //var productImage = "assets/amsterdam.jpg";
            }
            if (document.form1.color[i].value == 2) {
                var productColor = "Cozy Denim";
                //var productImage = "assets/silk linen 2";
            }
            if (document.form1.color[i].value == 3) {
                var productColor = "Rainy Day";
                //var productImage = "assets/whitepillow.jpg";
            }
        //  var productColor = document.form1.color[i].id;
        }
    }
    return productColor;
}


function setImage () {
    for (var i = 0; i < document.form1.color.length; i++) {
        if (document.form1.color[i].checked)  {
            if (document.form1.color[i].value == 0) {
                var productImage = "assets/bombay.jpg";
            }
            if (document.form1.color[i].value == 1) {
                var productImage = "assets/amsterdam.jpg";
            }
            if (document.form1.color[i].value == 2) {
                var productImage = "assets/silk linen 2.jpg";
            }
            if (document.form1.color[i].value == 3) {
                var productImage = "assets/whitepillow.jpg";
            }
        //  var productColor = document.form1.color[i].id;
        }
    }
    console.log("product image is: " + productImage);
    return productImage;
}

function setMaterialId () {
    for (var i = 0; i < document.form2.material.length; i++) {
        if (document.form2.material[i].checked)  {
            if (document.form2.material[i].value == 5) {
                var productMaterial = "Duck Down";
            }
             if (document.form2.material[i].value == 6) {
                var productMaterial = "Hypoallergenic Blend";
            }
            if (document.form2.material[i].value == 7) {
                var productMaterial = "Morning Foam";
            }
           //var productMaterial = document.form2.material[i].id;
       }
   }
   console.log("the product material is:" + productMaterial);
   return productMaterial;
}


function runIt() {
    var productName = document.getElementById("productName").innerHTML;
    var productQuantity = counter;
    var productColor = setColorId();
    var productMaterial = setMaterialId();
    var productPrice = productQuantity * 50;
    var productImage = setImage();
    console.log("product price is: " + productPrice);
    addToCart(productName, productColor, productMaterial, productQuantity, productPrice, productImage);
    console.log(counter);
    document.getElementById("counter").innerHTML = counter;
    alert('Added to Cart!');
}


function newCartItem() {
    var cartItemList = '';
    var savedCart = JSON.parse(localStorage.getItem('savedCart'));
    
    if (savedCart.length > 0) {
        document.getElementById('empty-cart-text').innerHTML= 'Your Cart';
        console.log("saved cart length: " + savedCart.length);
        var totalPrice = 0;
        for(let x of savedCart) {
        totalPrice = totalPrice + x.price;
        var htmlCode = `
         <div class='product-details-cart'>
                            <img class='cart-thumbnail' src='${x.image}' alt=''/>
                            <div class='item-cart'>
                                <div class='cart-first-line'>
                                    <p class='playfair-20px'><strong>${x.name}</strong></p>
                                    <img class='cancel-item-cart' src='assets/cancel.png' alt=''/>
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
                                            <div class='remove' onclick="removeQuantity()"><p><strong>-</strong></p></div>
                                            <p id="counter">${x.quantity}</p>
                                            <div class='add' onclick="addQuantity()"><p><strong>+</strong></p></div>  
                                        </div>
                                    </div>
                                    <div class='cart-price'><p class='cart-price-text'>Price:   ${x.price}</p></div>
                                </div>
                            </div>
                        </div>`;
                        }
    }
    totalPriceNumber = Number(totalPrice);
    cartItemList = cartItemList + htmlCode;
    document.getElementById('hero-container-cart-main').insertAdjacentHTML("beforeend", cartItemList);
            //.innerHTML += cartItemList;
}




