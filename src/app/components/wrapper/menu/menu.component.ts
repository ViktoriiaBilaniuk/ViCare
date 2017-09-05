import {Component, OnInit, SimpleChanges} from '@angular/core';
import {OrderService} from "../../../services/order.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  count: any = 0;
  visibility = false;
  label: string;
  constructor(public orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrder();
  }

  openOrder() {
    this.visibility = !this.visibility;
      this.orderService.calcFinalPrice();
  }
}
