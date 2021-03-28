import LineItem from './LineItem';
 
export default class OrderModel {

  constructor(
    totalCost,
    location_id,
  ) 
  {
    this.totalCost = 0;
    this.location_id = location_id;
    this.lineItems = new Array();
  }
  getTotal() {
    const n = this.getTotalInNumber();
    return n;
  }
  clear() {
    this.lineItems = [];
    this.location_id = '';
    this.totalCost = 0;
  }
  addItem(name, price, item_id, quantity){
    let item = new LineItem(name, price, item_id, quantity);
    this.lineItems.push(item);
    this.calculateOrder();
  }
  deleteItem(index){
    return this.lineItems.splice(index,1);
  }
  // Call based on location store
  calculateOrder(){
    let cost = 0; 
    if (this.lineItems.length == 0) {
      return this.totalCost += 0;
    }
    else {
      for (let i = 0; i < this.lineItems.length; i++) {
        let q = this.lineItems[i].quantity;
        let p = this.lineItems[i].price;
        let itemTotal = p * q;
        cost += itemTotal;
       
      }
      this.totalCost = cost;
      return this.totalCost;
    }
  }
  getLineItems() {
    return this.lineItems;
  }
  setLocationId(id) {
    return this.location_id = id;
  }
  getTotalInDollars(){
    return this.convertToDollars(this.totalCost);
  }
  convertToDollars(num){
    let dollars = num / 100;
    dollars = dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
    return dollars;
  }
}