import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LeftMenuListComponent } from './left-menu-list/left-menu-list.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { DataService } from './services/data.service';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { ApiService } from './services/api.service';
import { LocationItemComponent } from './location-item/location-item.component';
import { OrderbypipePipe } from './location-item/orderbypipe.pipe';
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: '', component: AdminLoginComponent, outlet: 'login' },
  { path: 'location', component: LocationItemComponent, outlet: 'main' }

]

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuListComponent,
    AdminLoginComponent,
    TodoListFooterComponent,
    TodoListHeaderComponent,
    TodoListItemComponent,
    LocationItemComponent,
    OrderbypipePipe,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
