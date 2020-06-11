import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  @Output() featureSelected = new EventEmitter<string>();
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }


}
