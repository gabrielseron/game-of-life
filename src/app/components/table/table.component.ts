import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
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
  nextGeneration: any;

  numberOfCells = 100;

  currentGeneration = 1;


  gameOfLife: any;

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.init();
  }

  async init() {
    this.getLocalStorageLength();
    await this.initLivingCells();
    this.game()
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
    this.nextGeneration = JSON.parse(JSON.stringify(this.currentGameArray));

    for (let i = 0; i < this.defaultWidth; i++) {
      for (let j = 0; j < this.defaultHeight; j++) {
        this.currentGameArray[i][j] = {width: i, height: j, activated: false}
      }
    }

    this.numberOfCells = (this.defaultWidth * this.defaultHeight)*0.1;
  }

  isFilled(width: number, height: number) {
    if (this.currentGameArray[width][height].activated)
      return true;
    return false;
  }

  async initLivingCells() {
    let cellsToCreate = this.numberOfCells;
      while (cellsToCreate > 0)
      {
        const w = Math.floor(Math.random() * this.defaultWidth)
        const h = Math.floor(Math.random() * this.defaultHeight)
  
        if (this.currentGameArray[w][h].activated === false)
        {
          this.currentGameArray[w][h].activated = true
          cellsToCreate -= 1;
        }
      }
  }

  game() {
    this.currentGeneration = 1;
    let interval = () => {
      for (let i = 0; i < this.defaultWidth; i++) {
        for (let j = 0; j < this.defaultHeight; j++) {
          this.scanAround(this.currentGameArray[i][j]);
        }
      }
      this.currentGeneration++;
      this.currentGameArray = this.nextGeneration;

      setTimeout(interval, 150);
    }

    interval()
  }

  scanAround(array: any) {
    let nbOfAliveAround = 0;
    for (let i = Math.max(0, array?.width-1); i < Math.min(array?.width+2, this.defaultWidth); i++) {
      for (let j = Math.max(0, array?.height-1); j <  Math.min(array?.height+2, this.defaultHeight); j++) {
        if (this.currentGameArray[i][j]?.activated) {
          nbOfAliveAround++
        }
      }
    }

    if (array.activated)
      nbOfAliveAround--;
    if (nbOfAliveAround != 2 && nbOfAliveAround != 3) {
      this.nextGeneration[array.width][array.height] = {width: array.width, height: array.height, activated: false};
    } else if(nbOfAliveAround == 3) {
      this.nextGeneration[array.width][array.height] = {width: array.width, height: array.height, activated: true};
    } else {
      this.nextGeneration[array.width][array.height] = {width: array.width, height: array.height, activated: array.activated};
    }

  }

}
