
/*
17h.In the Amazon project,create a class Appliance {}
      .An appliance is a specific type of product (it extends Product).
      .It has 2 extra properties:instructionsLink and warrantyLink.
      .In the products array,add type,instructionsLink , and warrantyLink
       to the toaster (4th product).If you need,download the images from:
       supersimple.dev/images/appliance-instructions.png
       supersimple.dev/images/appliance-warranty.png
.Convert the toaster into an Appliance class instead of a Product class.
.When displaying extra info,display the isnstructions
 and the warranty,Follow the design on the right:
.Find other products that are appliances (kettle,
blender,tec) and convert them to Appliance class.
17i.Create tests for the Product,Clothing and Appliance classes.
     . Create a new test file data/productsTest.js and load it in tests.html
     . Create a test suite for each class and create tests for each class.
     (Export the classes,generate objects using each class,and check if the 
     properties and methods are correct).
.When testing extraInfoHTML you can use expect(...).toContain(...)
 to check if the result contains a certain string.
Note:you may want to create a copy of the project code for exercise 17j.
17j.Replace all uses of the cart array with cart class.
     . In data/cart-class.js export the cart object.Replace all uses of 
     import ... data/cart.js with import ... data/cart-class.js
    . Update the code and the tests to make everthing work again.
     Hint:in the tests,instead of mocking localStorage.getItem you can 
     just directly set cart.cartItems=[...]

*/
import { Product } from "./productClass.js";





export class Appliance extends Product {
    instructionsLink;
    warrantyLink;
    constructor(productDetails) {
        super(productDetails);
        this.instructionsLink = productDetails.instructionsLink;
        this.warrantyLink = productDetails.warrantyLink;
    }
    getExtraInfo() {
        return `<div><a href="${this.instructionsLink}"> instruction link </a></div>
    <div><a href="${this.warrantyLink}"> warranty Link </a></div>
    `;
    }
}