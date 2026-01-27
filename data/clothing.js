import { Product } from "./productClass.js";

export class Clothing extends Product {
  sizeChartLink;
  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }
  getExtraInfo(){
    //super().getExtraInfo();
    return `<a href="${this.sizeChartLink}" target="_blank">see more </a>`;
  }
}