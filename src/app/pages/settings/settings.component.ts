import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  defaultWidth = 50;
  defaultHeight = 50;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    let w  = localStorage.getItem('width');
    let h  = localStorage.getItem('height');

    if (w !== undefined && typeof w === 'string' && w !=='0')
      this.defaultWidth = parseInt(w);

    if (h !== undefined && typeof h === 'string' && w !=='0')
      this.defaultHeight = parseInt(h);
  }

  save() {
    localStorage.setItem('width', JSON.stringify(this.defaultWidth));
    localStorage.setItem('height', JSON.stringify(this.defaultHeight));
    this.router.navigateByUrl('/game')
  }

  reset() {
    this.defaultWidth = 50;
    this.defaultHeight = 50;
    localStorage.clear();
    this.router.navigateByUrl('/game')
  }

}
