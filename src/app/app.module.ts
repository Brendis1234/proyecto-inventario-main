import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {AppComponent } from './app.component';
import {AngularFireAuthModule, USE_EMULATOR as USE_AUTH_EMULATOR} from '@angular/fire/auth';
import {AngularFirestoreModule, USE_EMULATOR as USE_FIRESTORE_EMULATOR} from '@angular/fire/firestore';
import {AngularFireFunctionsModule, USE_EMULATOR as USE_FUNCTIONS_EMULATOR} from '@angular/fire/functions';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

import {LoginComponent} from './login/login.component';
import {EquiposCardListComponent} from './equipos-card-list/equipos-card-list.component';
import {AppRoutingModule} from './app-routing.module';
import {MantenimientoComponent} from './mantenimiento/mantenimiento.component';
import {CreateEquipoComponent} from './create-equipo/create-equipo.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {CreateUserComponent} from './create-user/create-user.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {EditEquipoDialogComponent} from './edit-equipo-dialog/edit-equipo-dialog.component';

import { CreateMantenimientoComponent } from './create-mantenimiento/create-mantenimiento.component';
import { EditMantenimientoDialogComponent } from './edit-mantenimiento/edit-mantenimiento.component';
import { FormsModule } from '@angular/forms';
import { SearchEquipoComponet } from './search-equipo/search-equipo.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MantenimientoComponent,
    EquiposCardListComponent,
    EditEquipoDialogComponent,
    EditMantenimientoDialogComponent,
    LoginComponent,
    CreateEquipoComponent,
    CreateMantenimientoComponent,
    CreateUserComponent,
    SearchEquipoComponet
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    FormsModule,
    NgxQRCodeModule
  ],
  providers: [
  // { provide: USE_AUTH_EMULATOR, useValue: environment.useEmulators ? ['localhost', 9099] : undefined },
  // { provide: USE_FIRESTORE_EMULATOR, useValue: environment.useEmulators ? ['localhost', 8080] : undefined },
  // { provide: USE_FUNCTIONS_EMULATOR, useValue: environment.useEmulators ? ['localhost', 5001] : undefined }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
