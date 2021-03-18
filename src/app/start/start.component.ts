import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private _electronService: ElectronService) { }

  ngOnInit(): void {
  }

  public openExisting() {
    console.log("hello world");
    if (this._electronService.isElectronApp) {
       let result: string = this._electronService.ipcRenderer.sendSync('ping', 'ping');
       console.log(result);
     
    }
  }

}
