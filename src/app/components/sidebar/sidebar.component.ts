import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  defaultWidth = 50;
  defaultHeight = 50;
  speed = 150; //ms

  constructor() { }

  ngOnInit(): void {
    let w = localStorage.getItem('width');
    let h = localStorage.getItem('height');
    let speed = localStorage.getItem('speed');

    if (w !== undefined && typeof w === 'string' && w !=='0')
      this.defaultWidth = parseInt(w);

    if (h !== undefined && typeof h === 'string' && h !=='0')
      this.defaultHeight = parseInt(h);

    if (speed !== undefined && typeof speed === 'string' && speed !=='0')
      this.speed = parseInt(speed);
  }

}
