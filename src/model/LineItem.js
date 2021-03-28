
export default class LineItem {
    name;
    price;
    item_id;
    quantity;

    constructor(name, price, id, quantity) {
      this.name = name;
      this.price = price;
      this.item_id = id;
      this.quantity = quantity;
    }
    setName(s) {
      return this.name = s;
    }
    setPrice(s){
      return this.price = s;
    } 
    setId(s) {
      return this.item_id = s;
    }  
    setQuantity(q) {
      return this.quantity = q;
    }
  }