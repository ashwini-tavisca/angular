import { Product } from './app.product';
import { Products } from './app.constants';

export class Logic {
    private products: Array<Product>;
    private prds = Products;
    constructor(){
      this.products = new Array<Product>();
      this.prds.forEach((p,i)=> {
         this.products.push(
           new Product(p.ProductId,p.ProductName,p.Price,p.Catgory)
         );
      });
    }

    getProducts(): Array<Product> {
      return this.products;
    }

    saveProducts(prd: Product): Array<Product> {
      let matchingIndex = this.products.findIndex(i => i.ProductId == prd.ProductId);
      if(matchingIndex == -1){
        this.products.push(prd);
      }else{
        this.products[matchingIndex] = prd
      }
      return this.products;
    }
}
