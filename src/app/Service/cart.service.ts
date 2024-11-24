import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl: string = 'https://flowershopbackend-t4e6.onrender.com/api/cart/';

  constructor(private http: HttpClient) { }

  getCartByCartId(cartId : string){
    return this.http.get(this.baseUrl+`get-cart-by/${cartId}`)
  }

  // productId
  // quantity
  // priceAtPurchase
  // priceAfterDiscount
  addProductToCart(cartId: string, product: any) {
    return this.http.post(this.baseUrl + `add-item/${cartId}`, product);
  }

  deleteProductOfCart(itemId: string) {
    return this.http.delete(this.baseUrl + `delete-cart-item//${itemId}`);
  }

  //itemId
  //quantity
  //cartId
  updateCartItemsQuantity(cartId: string, item : any){
    return this.http.post(this.baseUrl+`update-item-quantity/${cartId}`, item)
  }
 
}
