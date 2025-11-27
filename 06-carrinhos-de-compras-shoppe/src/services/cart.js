// adicionar carrinho 

async function addItem(userCart,item) {
userCart.push(item);
}

// deletar item do carrinho 
async function deleteItem(userCart,name) {
const index = userCart.findIndex((item) => item.name === name);

if(index !== -1) {
    userCart.splice(index,1);
}
}


//remover um item 
    async function removeItem(userCart,index) {
        if (index >= 0 && index < userCart.length) {
        userCart.splice(index,1);
    } else {
        console.log("Item not found");
    }
    }

//exibir o carrinho
async function displayCart(userCart) {
    console.log("Shopee cart");
    userCart.forEach((item,index) => {
        console.log(`${index + 1} - ${item.name} - ${item.price} - ${item.quantity} - ${item.subtotal()}`);
    });
}


//calcular o total do carrinho 
async function calculateTotal(userCart) {
const result = userCart.reduce((total,item) => total + item.subtotal(),0);
console.log(`Total: ${result}`);
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart,
}