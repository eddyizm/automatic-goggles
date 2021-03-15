import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})
export class NavheaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  constructor() { }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  ngOnInit(): void {
  }

}
