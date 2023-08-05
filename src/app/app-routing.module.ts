import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './ui/components/page-not-found/page-not-found.component';

const routes: Routes =
[
  // {
  //   path: 'courts',
  //   loadChildren: () => import('.module').then(m => m.CrisisCenterModule),
  // },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
