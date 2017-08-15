import { Injectable } from '@angular/core';
import {Category} from "../models/category";

@Injectable()
export class CategoryService {
  categories = [
    {
      name: 'For hair',
      url: 'hair',
      file: 'hair.json'
    },
    {
      name: 'For body',
      url: 'body',
      file: 'body.json'
    },
    {
      name: 'For face',
      url: 'face',
      file: 'face.json'
    }
  ]
  constructor() { }
  getCategoryByName(name: string): Category {
    for (let item of this.categories){
      if (item.url === name) {
        return item;
      }
    }
  }
}
