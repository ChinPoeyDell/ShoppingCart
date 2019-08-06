import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingCart';

  logo = 'CannotGoodGood.com';

  selectedQuantity = 0;
  // total = 0;
  

  itemLists = [
    {
      itemID: "01",
      itemPrice: 200,
      itemDescription: "Fxxking Rabbits Cap",
      itemImage: "https://media.karousell.com/media/photos/products/2018/02/09/fxxcking_rabbits_emboidered_cap_1518107136_cbd6f7f2.jpg",
      itemQuantity: 0
    },
    {
      itemID: "02",
      itemPrice: 150,
      itemDescription: "Hippocrate",
      itemImage: "https://thehippocrate.com/wp-content/uploads/2019/01/CEC_FRONT-800x1000.jpg",
      itemQuantity: 0
    },
    {
      itemID: "03",
      itemPrice: 250,
      itemDescription: "Huf",
      itemImage: "https://i.ebayimg.com/images/g/xXoAAOSw5E9az5rZ/s-l640.jpg",
      itemQuantity: 0
    },
    {
      itemID: "04",
      itemPrice: 500,
      itemDescription: "Y-3",
      itemImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmVlTSDhGW_JLk0NbjtLkkYRlCvPr_XFmxbsrUemdmfVr3Tj3FA",
      itemQuantity: 0
    }
  ];

  itemCarts = [];

 Plus(itemLists){
    itemLists.itemQuantity = itemLists.itemQuantity + 1;
  }

 Minus(itemLists) {
    if(itemLists.itemQuantity > 0){
      itemLists.itemQuantity = itemLists.itemQuantity - 1;
    }
  }

  toggleClearCart() {
    this.itemCarts = []
  }

  toggleAddtoCart() {
    // itemCarts.push(this.itemLists);
    this.itemCarts = (this.itemLists);
    
  }

  // finalTotal(itemCarts) {
  //   for (var i=0; i < itemCarts.lenght; i++) {
  //     this.total = itemCarts.itemQuantity + itemCarts.itemPrice;
  //   }
  // }
  

  // finalTotal(itemCarts) {
  //   var total = 0;
  //   var len = itemCarts.lenght;
  //   for (var i=0; i< len; i++) {
  //     total = total + itemCarts[i].itemQuantity * itemCarts[i].itemPrice;
  //   };
  //   return total;
  // }

    finalTotal(total) {
    var total = 0;
    var len = this.itemCarts;
    for (var i=0; i< 4; i++) {
      total = total + this.itemCarts[i].itemQuantity * this.itemCarts[i].itemPrice;
    };
    return total;
    }


}