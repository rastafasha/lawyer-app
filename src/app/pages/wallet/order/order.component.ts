import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LateralComponent } from '../../../components/lateral/lateral.component';
import { BackButtnComponent } from '../../../shared/backButtn/backButtn.component';
import { HeaderComponent } from '../../../shared/header/header.component';
import { MenuFooterComponent } from '../../../shared/menu-footer/menu-footer.component';

@Component({
  selector: 'app-order',
  imports: [
    MenuFooterComponent, HeaderComponent,
    CommonModule, RouterLink, LateralComponent,
    BackButtnComponent
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  pageTitle='Wallet | Actual Order ';
}
