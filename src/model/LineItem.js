
export class LineItemModel {
    name;
    size;
    price;
    item_id;
    quatity;

    constructor() {}

    setName(s) {
      this.name = s;
    }
    setSize(s) {
      this.size = s;
    }
    setPrice(s){
      this.price = s;
    } 
    setId(s) {
      this.item_id = s;
    }
    setQuantity(s) {
      this.quatity = s;
    }  
  }

  const GlobalLineItem  = new LineItemModel();
  export default GlobalLineItem;