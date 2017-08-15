import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { MainComponent } from './components/main/main.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CategoryComponent } from './components/catalog/category/category.component';
import { HairComponent } from './components/catalog/hair/hair.component';
import { BodyComponent } from './components/catalog/body/body.component';
import { FaceComponent } from './components/catalog/face/face.component';
import { ProductComponent } from './components/catalog/product/product.component';
import { InformationComponent } from './components/information/information.component';
import { IngradientComponent } from './components/ingradient/ingradient.component';
import { MenuComponent } from './components/wrapper/menu/menu.component';
import { CallbackComponent } from './components/wrapper/callback/callback.component';
import { OrderComponent } from './components/order/order.component';
import {routing} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CurrentCategoryComponent } from './components/catalog/category/current-category/current-category.component';
import {CategoryService} from "./services/category.service";

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    MainComponent,
    CatalogComponent,
    CategoryComponent,
    HairComponent,
    BodyComponent,
    FaceComponent,
    ProductComponent,
    InformationComponent,
    IngradientComponent,
    MenuComponent,
    CallbackComponent,
    OrderComponent,
    CurrentCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    routing
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
