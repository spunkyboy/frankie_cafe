let cart = [];
function openCartModal() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = 'block'; // Show modal
  updateCart(); 
}

// Function to close the modal
function closeCartModal() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = 'none'; // Hide modal
}


function addToCart(productId, productName, productImage, price) {
  const item = cart.find(product => product.id === productId);

  if (item) {
    item.quantity += 1;
  } else {
    cart.push({
      id: productId,
      name: productName,
      image: productImage,
      price: price,
      quantity: 1
    });
  }
  updateCart();
}

function increaseQuantity(productId) {
  const item = cart.find(product => product.id === productId);
  if (item) {
    item.quantity += 1;
    updateCart();
  }
}

function decreaseQuantity(productId) {
  const item = cart.find(product => product.id === productId);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
  } else {
    cart = cart.filter(product => product.id !== productId);
  }
  updateCart();

}
// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('cart-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

function updateCart() {
  const cartDiv = document.getElementById('cart-items');
  const proceedBtn = document.getElementById('proceed-btn');
  const itemCount = document.getElementById('item-count');
  
  cartDiv.innerHTML = '';

  if (cart.length === 0) {
    cartDiv.innerHTML = '<p>Your cart is empty.</p>';
    itemCount.textContent = '0';  
    proceedBtn.style.display = 'none';
  } else {
    let total = 0;
    let totalItems = 0;
  
    cart.forEach(product => {
      total += product.price * product.quantity;
      totalItems += product.quantity; 

      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      itemDiv.innerHTML = `
      <div>
        <p>${product.name}:${product.image} £${product.price} x ${product.quantity}</p>
      </div>
      <div>
        <button onclick="decreaseQuantity(${product.id})">-</button>
        <button onclick="increaseQuantity(${product.id})">+</button>
        <button onclick="removeFromCart(${product.id})">Remove</button>
      </div>
      `;

      cartDiv.appendChild(itemDiv);
    });

    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<h3>Total: £${total}</h3>`;
    cartDiv.appendChild(totalDiv);

    itemCount.textContent = totalItems;  // Update the displayed item count
    proceedBtn.style.display = 'inline-block'; // Show the "Proceed to Payment" button
  }
}

function showUserForm() {
  document.getElementById('user-info-form').style.display = 'block';
}

function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  const postcode = document.getElementById("postcode").value.trim();
  const errorElement = document.getElementById("error");

   // Simple regex pattern for UK postcode validation
   const postcodePattern = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i;

   if (postcodePattern.test(postcode)) {
       errorElement.textContent = "";
       alert("Postcode is valid!");
       // Proceed with form submission or further processing
   } else {
       errorElement.textContent = "Please enter a valid postcode.";
   }

  // Name validation (only letters and spaces allowed)
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    alert("Please enter a valid name (letters and spaces only).");
    return false;
  }

  // Email validation (HTML5 built-in validation using type="email")
  if (!email) {
    alert("Please enter a valid email.");
    return false;
  }

  // Address validation (basic non-empty check)
  if (address.trim() === "") {
    alert("Please enter a valid address.");
    return false;
  }

  // Phone validation (10 digits, basic)
  if (!/^\d{11}$/.test(phone)) {
    alert("Please enter a valid 11-digit phone number.");
    return false;
  }

  alert("Form submitted successfully! Proceeding to payment...");
  // After validation, proceed to payment page or further processing
  // window.location.href = '/payment.html'; // Example redirect
  return true;
}
function removeFromCart(productId) {
  cart = cart.filter(product => product.id !== productId);
  updateCart();
}

function proceedToPayment() {
  alert("Proceeding to payment..."); // Mock payment process
  // You can redirect to a payment page or integrate with a payment gateway here
  // window.location.href = '/payment.html'; // Example redirect
}