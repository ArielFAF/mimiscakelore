import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCategoriasComponent } from './componentes/categorias/lista-categorias/lista-categorias.component';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { CrearCategoriaComponent } from './componentes/categorias/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './componentes/categorias/editar-categoria/editar-categoria.component';
import { ListaSupermercadosComponent } from './componentes/supermercados/lista-supermercados/lista-supermercados.component';
import { CrearSupermercadoComponent } from './componentes/supermercados/crear-supermercado/crear-supermercado.component';
import { EditarSupermercadoComponent } from './componentes/supermercados/editar-supermercado/editar-supermercado.component';
import { PruebasComponent } from './componentes/pruebas/pruebas.component';

import { ShowComponent } from './componentes/show/show.component';
import { CreateComponent } from './componentes/create/create.component';
import { EditComponent } from './componentes/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'show', pathMatch: 'full' },
  { path: 'lista-categorias', component: ListaCategoriasComponent },
  { path: 'crear-categoria', component: CrearCategoriaComponent },
  { path: 'editar-categoria/:id', component: EditarCategoriaComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'lista-supermercados', component: ListaSupermercadosComponent },
  { path: 'crear-supermercado', component: CrearSupermercadoComponent },
  { path: 'editar-supermercado/:id', component: EditarSupermercadoComponent },

  { path: 'pruebas', component: PruebasComponent },

  { path: 'show', component: ShowComponent},
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
