import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../../../services/category.service';
import {Category} from '../../../../models/category';
import {Product} from '../../../../models/product';

@Component({
  selector: 'app-current-category',
  templateUrl: './current-category.component.html',
  styleUrls: ['./current-category.component.css']
})
export class CurrentCategoryComponent implements OnInit {
  sub: any;
  category: Category;
  products: Product[];
  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit() {
    this.sub = this.route.params
      .subscribe((params) => {
        const categoryName = params['category'];
        this.category = this.categoryService.getCategoryByName(categoryName);
        this.getProduct(this.category.file);
      });
  }

  getProduct(fileUrl: string) {

  }
}
