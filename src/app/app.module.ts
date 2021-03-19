import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartComponent } from './start/start.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { NgxElectronModule } from 'ngx-electron';
import { BoardComponent } from './board/board.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';


const routes: Routes = [
  { path: '', component: StartComponent, pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    BoardComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgxElectronModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
