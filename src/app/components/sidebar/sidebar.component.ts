import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  defaultWidth = 50;
  defaultHeight = 50;

  constructor() { }

  ngOnInit(): void {
    let w  = localStorage.getItem('width');
    let h  = localStorage.getItem('height');

    if (w !== undefined && typeof w === 'string' && w !=='0')
      this.defaultWidth = parseInt(w);

    if (h !== undefined && typeof h === 'string' && w !=='0')
      this.defaultHeight = parseInt(h);
  }

}
