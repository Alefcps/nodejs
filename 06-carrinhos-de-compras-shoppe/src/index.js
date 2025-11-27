import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to the shopping cart");


const item1 = await createItem("Apple",1.00,10);
const item2 = await createItem("Banana",30.00,20);

await cartService.addItem(myCart,item1);
await cartService.addItem(myCart,item2);

await cartService.deleteItem(myCart,"Apple");
await cartService.removeItem(myCart,1);
await cartService.displayCart(myCart);

console.log("Shopee cart total")
await cartService.calculateTotal(myCart);

console.log(item2.subtotal());