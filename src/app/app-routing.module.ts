import { Routes, RouterModule } from '@angular/router';
import {WrapperComponent} from './components/wrapper/wrapper.component';
import {MainComponent} from './components/main/main.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {CategoryComponent} from './components/catalog/category/category.component';
import {HairComponent} from './components/catalog/hair/hair.component';
import {BodyComponent} from './components/catalog/body/body.component';
import {FaceComponent} from './components/catalog/face/face.component';
import {ProductComponent} from './components/catalog/product/product.component';
import {InformationComponent} from './components/information/information.component';
import {IngradientComponent} from './components/ingradient/ingradient.component';
import {OrderComponent} from './components/order/order.component';
import {CallbackComponent} from './components/wrapper/callback/callback.component';
import {CurrentCategoryComponent} from './components/catalog/category/current-category/current-category.component';


export const routes: Routes = [
  {path: '',
    component: WrapperComponent,
    children: [
      {path: 'main', component: MainComponent},
      {path: 'catalog', component: CatalogComponent,
        children: [
          {path: 'categories', component: CategoryComponent},
          {path: 'categories/:category', component: CurrentCategoryComponent},
          {path: 'product', component: ProductComponent},
          {path: '', redirectTo: 'categories', pathMatch: 'full'},
        ]},
      {path: 'info', component: InformationComponent},
      {path: 'ingradient', component: IngradientComponent},
      {path: 'order', component: OrderComponent},
      {path: '', redirectTo: 'main', pathMatch: 'full'},
    ]
  }
];

export const routing = RouterModule.forRoot(routes, {enableTracing: false});
