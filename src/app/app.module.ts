import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartComponent } from './start/start.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { BoardComponent } from './board/board.component';
import { CardEditComponent } from './card-edit/card-edit.component';
import { fromEventPattern } from 'rxjs';
import { NavheaderComponent } from './board/navheader/navheader.component';
import { SidenavComponent } from './board/sidenav/sidenav.component';


const routes: Routes = [
  //{ path: 'board', component: BoardComponent}, -- this is now the point of entry
  //{ path: 'card-edit', component: CardEditComponent}, -- not used yet
  { path: '', component: BoardComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    BoardComponent,
    CardEditComponent,
    NavheaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
