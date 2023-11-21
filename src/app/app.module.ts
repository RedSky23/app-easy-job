import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//NAVBAR
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


import { PagePrincipalComponent } from './page-principal/page-principal/page-principal.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CreateEditComponent } from './employeer/create-edit/create-edit.component';


import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';


import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { WorkerComponent } from './component/worker/worker.component';
import { ListarComponent } from './component/worker/listar/listar.component';
import { WorkerCreateEditComponent } from './component/worker/worker-create-edit/worker-create-edit.component';
import { CreateServiceContractComponent } from './employeer/create-service-contract/create-service-contract.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagePrincipalComponent,
    CreateEditComponent,
    WorkerComponent,
    ListarComponent,
    WorkerCreateEditComponent,
    CreateServiceContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
