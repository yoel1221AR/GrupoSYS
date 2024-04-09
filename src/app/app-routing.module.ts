import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'finsuite',
    pathMatch: 'full',
  },
  {
    path: 'finsuite',
    loadChildren: () =>
      import('./finsuite/finsuite.module').then((m) => m.FinsuiteModule),
  },

  {
    path: '**',
    redirectTo: 'finsuite',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
