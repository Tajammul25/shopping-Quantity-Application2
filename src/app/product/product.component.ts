import { Component } from '@angular/core';
import { count } from 'rxjs';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  availableStock1: number = 20;
  availableStock2: number = 15;
  availableStock3: number = 10;

  count1: number = 0;
  count2: number = 0;
  count3: number = 0;

  minimum1: boolean = false;
  maximum1: boolean = false;
  minimum2: boolean = false;
  maximum2: boolean = false;
  minimum3: boolean = false;
  maximum3: boolean = false;

  maxQuantity1: number = 20;
  maxQuantity2: number = 15;
  maxQuantity3: number = 10;

  validateQuantity1() {
    this.minimum1 = this.count1 < 1;
    this.maximum1 = this.count1 > this.maxQuantity1;
  }

  validateQuantity2() {
    this.minimum2 = this.count2 < 1;
    this.maximum2 = this.count2 > this.maxQuantity2;
  }

  validateQuantity3() {
    this.minimum3 = this.count3 < 1;
    this.maximum3 = this.count3 > this.maxQuantity3;
  }

  addToCart1() {
    this.validateQuantity1();
    if (this.count1 > this.availableStock1) {
      alert("Product Out Of Stock: iPhone 15.");
    } else if (!this.minimum1 && !this.maximum1) {
      alert(`Added to cart: ${this.count1} iPhone 15(s) at $${499 * this.count1}`);
      this.availableStock1 -= this.count1;
       this.count1 === this.count1 ; // Reset count after adding to cart
    }
  }

  addToCart2() {
    this.validateQuantity2();
    if (this.count2 > this.availableStock2) {
      alert("Product Out Of Stock: Keyboard.");
    } else if (!this.minimum2 && !this.maximum2) {
      alert(`Added to cart: ${this.count2} Keyboard(s) at $${150 * this.count2}`);
      this.availableStock2 -= this.count2;
      this.count2 === this.count2; // Reset count after adding to cart
    }
  }

  addToCart3() {
    this.validateQuantity3();
    if (this.count3 > this.availableStock3) {
      alert("Product Out Of Stock: Samsung Ultra 24.");
    } else if (!this.minimum3 && !this.maximum3) {
      alert(`Added to cart: ${this.count3} Samsung Ultra 24(s) at $${899 * this.count3}`);
      this.availableStock3 -= this.count3;
      this.count3 === this.count3; // Reset count after adding to cart
    }
  }

  AllCart() {
    if (this.count1 === 0 && this.count2 === 0 && this.count3 === 0) {
      alert("Your cart is empty.");
    } else {
      let message = '';

      if (this.count1 > 0 )
       {
        message += `Added to cart: ${this.count1} iPhone 15(s) at $${499 * this.count1}\n`;
      }

      if (this.count2 > 0) {
        message += `Added to cart: ${this.count2} Keyboard(s) at $${150 * this.count2}\n`;
      }

      if (this.count3 > 0) {
        message += `Added to cart: ${this.count3} Samsung Ultra 24(s) at $${899 * this.count3}\n`;
      }

      alert(message);
    }
  }

}

