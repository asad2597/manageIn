import { Component , Input } from '@angular/core';
import { transition,trigger,style,animate, state } from '@angular/animations';
import { INavbarData, fadeInOut } from '../helper';
import { isNgContainer } from '@angular/compiler';

@Component({
  selector: 'app-sublevel-menu',
  templateUrl: './sublevel-menu.component.html',
  styleUrls: ['../sidenav.component.scss'],
  animations: [
    fadeInOut,
    trigger('submenu', [
      state('hidden', style({
        height: '0',
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [
        animate('{{transitionParams}}')
      ]),
      transition('void => *' , animate(0))
    ])
  ]
})
export class SublevelMenuComponent {

  @Input() data: INavbarData = {
    routeLink: '',
    icon: '',
    label: '',
    items: []
  }
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;


  handleClick(item: any){
    if(!this.multiple){
      if(this.data.items && this.data.items.length > 0){
        for(let modelItem of this.data.items){

          if(item !== modelItem && modelItem.expanded){
            console.log("" + modelItem.expanded);
            modelItem.expanded = false;
          }
        }
      }
    } 
    item.expanded = !item.expanded;
  }
}
