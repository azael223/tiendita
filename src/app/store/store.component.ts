import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductRepository } from '../models/product.repository';
import { Router } from '@angular/router';
import { Cart } from '../models/cart.model';
@Component({
  selector: 'store',
  templateUrl: 'store.component.html',
})
export class StoreComponent {
  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;
  constructor(
    private repository: ProductRepository,
    private _router: Router,
    private _cart: Cart
  ) {}
  addProductToCart(product: Product) {
    this._cart.addLine(product);
    this._router.navigateByUrl('/cart');
  }
  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }
  get categories(): String[] {
    return this.repository.getCategories();
  }
  changeCategory(newCategory?: String): void {
    this.selectedCategory = newCategory;
  }
  changePage(newPage: number): void {
    this.selectedPage = newPage;
  }
  changePageSize(newSize: number): void {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
  get pageNumbers(): number[] {
    return Array(
      Math.ceil(
        this.repository.getProducts(this.selectedCategory).length /
          this.productsPerPage
      )
    )
      .fill(0)
      .map((x, i) => i + 1);
  }
  get pageCount(): number {
    return Math.ceil(
      this.repository.getProducts(this.selectedCategory).length /
        this.productsPerPage
    );
  }
}
