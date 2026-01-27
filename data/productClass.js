import { currencyFormat } from "../scripts/utils/money.js";

export class Product {
  id;
  image;
  name;
  rating;
  priceCents;
  type;
  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.priceCents = productDetails.priceCents;
    this.rating = productDetails.rating;
    this.type=productDetails.type;
  }
  getRatingUrl() {
    return `src="images/ratings/rating-${this.rating.stars * 10}.png">`
  }
  getPrice() {
    return `$${currencyFormat(this.priceCents)}`;

  }
  getExtraInfo(){
    return ``;
  }
}