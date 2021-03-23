import LinesItems from './LineItem';

export default class Order {
    
    let locationId: string;
    let lineItems = new Array();

    constructor() {
        
    }
    addItem(item){
      return lineItems.push(item);
    }
    deleteItem(index){
      return lineItems.splice(index,1);
    }
    // Call based on location store
    completeOrder(){

    }
  }