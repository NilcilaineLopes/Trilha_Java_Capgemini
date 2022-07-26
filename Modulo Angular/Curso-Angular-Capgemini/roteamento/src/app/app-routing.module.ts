import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaComParamentrosComponent } from './pagina-com-paramentros/pagina-com-paramentros.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';

const routes: Routes = [
  {path: "primeira-pagina", component: PrimeiraPaginaComponent },
  {path: "segunda-pagina", component: SegundaPaginaComponent },
  {path: "pagina-com-paramentros/:id", component: PaginaComParamentrosComponent },
  {path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
