
export default class LineItem {
    name;
    price;
    item_id;
    quantity;
    base_price_money;

    constructor(name,size, price, id, quantity) {
      this.name = size + " " + name;
      this.base_price_money = {
        amount: price,
        currency: "USD"
      }
      // this.item_id = id;
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