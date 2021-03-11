import GlobalLineItem from './LineItem';

export class OrderModel {
  totalCost = 0.00;
  location_id;
  lineItems = [GlobalLineItem];

  constructor() {
  
  }
  getTotal() {
    return this.totalCost;
  }
  clear() {
    this.lineItems = [];
    this.location_id = '';
    this.totalCost = 0;
  }
  getLineItems() {
    return this.lineItems;
  }
  addItem(item){ 
    this.lineItems.push(item);
  }
  setLocationId(id) {
    this.location_id = id;
  }
  deleteItem(index){ 
    this.lineItems.splice(index,1);
  }
  getTotalInNumber(){
    let cost = this.getTotal();
    if (this.getLineItems() == 0 ) {
      cost = 0; 
    }
    else {
      cost = 0;
      for (let i = 0; i < this.lineItems.length; i++) {
        let q = this.lineItems[i].quatity;
        let p = this.lineItems[i].price;
        let itemTotal = p * q;
        
        cost += itemTotal;
      }
    } 
    return cost;
  }
  // getTotalInString() {
  //   let num = this.getTotalInNumber();
  //   console.log("Get total in String " + num);
  //   return this.getTotalInNumber();
  // }
  convertToDollars(num){
    let dollars = num / 100;
    dollars = dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
    return dollars;
}
  // Call based on location store
  completeOrder(){

  }
}
const Order = new OrderModel();
export default Order;
