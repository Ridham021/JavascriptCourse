const cart = ["pant","shirt","T-shirt","kurta"];
const emptyCart = null;

const promise = createOrder(cart);

promise
.then((orderId) => {
    console.log(`order with Id : ${orderId} is confrirmed......`);
    return orderId;
})
.then(function(orderId) {
    return proceedToPayment(orderId);  
})
.then(function(paymentId) {
    console.log(paymentId); 
})
.catch(function(err){
    console.log(err.message);
});





//production part

function createOrder(cart){

    const pr = new Promise((resolve,reject) => {
        
        // create order
        // validate order
        // orderId

       // console.log(!validateCart(cart))
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
                reject(err);
        }
        const orderId = "12345";
        if(orderId){
            setTimeout(() => {resolve(orderId);
            },5000);
        }    
    }) ;


    return pr;
}

function validateCart(cart){
    return !(cart==null)
}

// proceedToPayment

function proceedToPayment(orderId){
    
    return new Promise((resolve,reject) => {

      //  console.log(paymentDone(orderId));
        if(!paymentDone(orderId)){
           // console.log("i am here")
            const err = new Error("Payment failed...");
            return reject(err);
        }
        
        const paymentId = 'pytm12345';
        if(paymentId){
            setTimeout(() => {
                console.log("payment is confirmed...");
                resolve(paymentId);},5000);
    }

    })
}

// paymentDone() confirmation

function paymentDone(orderId){
    return true;
}
