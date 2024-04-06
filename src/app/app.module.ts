import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './componentes/articulos/articulos.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

import { CategoriaService } from './servicios/categoria.service';
import { ArticuloService } from './servicios/articulo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ListaCategoriasComponent } from './componentes/categorias/lista-categorias/lista-categorias.component';
import { CrearCategoriaComponent } from './componentes/categorias/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './componentes/categorias/editar-categoria/editar-categoria.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CrearSupermercadoComponent } from './componentes/supermercados/crear-supermercado/crear-supermercado.component';
import { EditarSupermercadoComponent } from './componentes/supermercados/editar-supermercado/editar-supermercado.component';
import { ListaSupermercadosComponent } from './componentes/supermercados/lista-supermercados/lista-supermercados.component';
import { PruebasComponent } from './componentes/pruebas/pruebas.component';
import { ShowComponent } from './componentes/show/show.component';
import { CreateComponent } from './componentes/create/create.component';
import { EditComponent } from './componentes/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    ListaCategoriasComponent,
    CrearCategoriaComponent,
    EditarCategoriaComponent,
    CrearSupermercadoComponent,
    EditarSupermercadoComponent,
    ListaSupermercadosComponent,
    PruebasComponent,
    ShowComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    CategoriaService,
    ArticuloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// AngularFireDatabaseModule,
// ToastrModule,
// ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

// RouterModule.forRoot(
//   appRoutes,
//   { enableTracing: false } // <-- debugging purposes only
// ),