import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sub-menu-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './sub-menu-layout.component.html',
  styleUrl: './sub-menu-layout.component.css'
})
export class SubMenuLayoutComponent {
  menuList : any [] = [
    {
      title: 'Tudatossági Anyag',
      children: [
      {path: 'introduction', title: 'Bevezetés'},
      {
          path: 'fundamentals',
          title: 'Alapvető biztonsági fogalmak',
      },
      {
          path: 'threats',
          title: 'Veszélyforrások és fenyegetések',
      },
      {
          path:'work-environment',
          title: 'Munkakörnyezet biztonsága',
      },
      {
          path: 'safe-internet-and-email',
          title: 'Biztonságos internet- és e-mail használat',
      },
      {
          path: 'mobile-devices',
          title: 'Mobil eszközök biztonsága',
      },
      {
          path: 'summary',
          title: 'Befejezés',
      },
      ]
    }
  ]
}
