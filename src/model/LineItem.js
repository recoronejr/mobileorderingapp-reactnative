
export class LineItemModel {
    name;
    price;
    item_id;

    constructor() {}

    setName(s) {
      this.name = s;
    }
    setPrice(s){
      this.price = s;
    } 
    setId(s) {
      this.item_id = s;
    }  
  }

  const GlobalLineItem  = new LineItemModel();
  export default GlobalLineItem;