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

  numberOfCells = 10;

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

  }

  isFilled(width: number, height: number) {
    if (this.currentGameArray[width][height])
      return true;
    return false;
  }

  initLivingCells() {
    console.log(this.defaultWidth * this.defaultHeight < this.numberOfCells);
    if (this.defaultWidth * this.defaultHeight < this.numberOfCells)
    {
      this.toastr.error('Cannot generate more cells than the size of the table', 'An error has occured')
    } else
    {
      let cellsToCreate = this.numberOfCells;

      while (cellsToCreate > 0)
      {
        const w = Math.floor(Math.random() * this.defaultWidth)
        const h = Math.floor(Math.random() * this.defaultHeight)
  
        if (w*h > this.numberOfCells && !this.currentGameArray[w][h])
        {
          this.currentGameArray[w][h] = true
          cellsToCreate -= 1;
          console.log(cellsToCreate, this.numberOfCells);
        }
      }
    }
  }

}
