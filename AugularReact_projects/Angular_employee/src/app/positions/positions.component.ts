import { Component, OnInit } from '@angular/core';
import { PositionService } from 'src/app/data/position.service';
import { Position } from 'src/app/data/position'
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  positions  : Position[]
  getPositionsSub : any
  loadingError : boolean = false

  constructor(private positionservice : PositionService) { }

  ngOnInit() {
    this.getPositionsSub = this.positionservice.getPositions().subscribe((positionsReturned)=>{
      this.positions = positionsReturned;
    }, ()=>{this.loadingError = true});
  }
  ngOnDestory(){
    this.getPositionsSub.unsubscribe();
  }

}