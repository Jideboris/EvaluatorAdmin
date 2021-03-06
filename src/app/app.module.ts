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
import { AuthserviceService } from "./services/authservice.service";
import { AuthenticateService } from "./services/authenticate.service";
import { AddLocationComponent } from './location-item/add-location/add-location.component';

const adminRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AdminLoginComponent,canActivate: [AuthenticateService],},
  {
    path: 'admin', component: MainComponent, canActivate: [AuthenticateService], children: [
      { path: 'location', component: LocationItemComponent, outlet: 'main' },
      { path: 'addlocation', component: AddLocationComponent, outlet: 'main' },
      { path: 'left', component: LeftMenuListComponent, outlet: 'leftmenus' }
    ]
  },
  
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
    MainComponent,
    AddLocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(adminRoutes)
  ],
  providers: [DataService, ApiService, AuthserviceService, AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
