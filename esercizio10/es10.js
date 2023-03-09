const order = {};

if (!order.customer?.address?.city) {  
  console.log('City is required');
}




/*es per un mio ordine
const order = {
  customer : {
    name: "seba",
    address: {
      city:"ittiri",
    }
  }
};
if (!order.customer?.address?.city) {  
  console.log('City is required');
} else {
  console.log(order.customer.address.city)
} */