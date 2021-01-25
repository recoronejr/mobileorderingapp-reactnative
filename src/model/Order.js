import LinesItems from './LineItem';

export default class Order {
    
    let location: string;
    let lineItems[] = new LinesItems();

    constructor() {
        
    }
    addLineItem(item){
      lineItems.push(item);
    }
    deleteLineItem(index){
      lineItems.splice(index,1);
    }
    // Call based on location store
    completeOrder(){

    }
  }