import { Component, EventEmitter, Output, OnInit, HostListener } from '@angular/core';
import { navbarData } from './nav-data';
import { INavbarData , fadeInOut } from './helper';

interface SideNavToggle {
  collapsed: boolean,
  screenWidth: number
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [ fadeInOut ]
})
export class SidenavComponent implements OnInit{

  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter;
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize',['$event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ){
      this.collapsed = false;
      this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }

  }

  ngOnInit(){
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav() {
    this.collapsed = false;
    this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  handleClick(item: INavbarData){
    if(!this.multiple){
      for(let modelItem of this.navData){
        if(item !== modelItem && modelItem.expanded){
           modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded;
    
    // if(!item.expanded){
    //   console.log("Main nav closed!");

    // }else{
    //   console.log("Main nav opened!")
    // }
  }
}
