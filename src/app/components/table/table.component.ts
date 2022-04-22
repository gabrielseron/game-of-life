import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  defaultHeight = 50;
  defaultWidth = 50;

  tableWidth: any;
  tableHeight: any;

  currentGameArray: any;

  numberOfCells = 100;

  currentGeneration = 0;

  isActive = false;

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.getLocalStorageLength();
    this.initLivingCells();
    this.isActive = true;
    this.currentGeneration = 1;
  }

  stop() {
    this.isActive = false;
  }

  counter(i: number) {
    return new Array(i);
  }

  getLocalStorageLength() {
    let w  = localStorage.getItem('width');
    let h  = localStorage.getItem('height');

    if (w !== undefined && typeof w === 'string')
      this.defaultWidth = parseInt(w);

    if (h !== undefined && typeof h === 'string')
      this.defaultHeight = parseInt(h);

    this.tableWidth = this.counter(this.defaultWidth);
    this.tableHeight = this.counter(this.defaultHeight);

    this.currentGameArray = Array.from(Array(this.defaultWidth), () => new Array(this.defaultHeight));

    this.numberOfCells = (this.defaultWidth * this.defaultHeight)*0.4;
    // console.log(this.defaultHeight*this.defaultWidth*0.4);

    // console.log((50 * 50)*0.4);
  }

  isFilled(width: number, height: number) {
    if (this.currentGameArray[width][height])
      return true;
    return false;
  }

  initLivingCells() {
    let cellsToCreate = this.numberOfCells;

    while (cellsToCreate > 0)
    {
      const w = Math.floor(Math.random() * this.defaultWidth)
      const h = Math.floor(Math.random() * this.defaultHeight)

      if (!this.currentGameArray[w][h])
      {
        this.currentGameArray[w][h] = true
        cellsToCreate -= 1;
      }

    }

  }

  game() {
    // this.isActive = true;

    // while (this.isActive)
    // {
      
    // }
  }

}
