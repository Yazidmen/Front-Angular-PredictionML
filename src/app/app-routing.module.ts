import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafclComponent } from './cafcl/cafcl.component';
import { UclComponent } from './ucl/ucl.component';

const routes: Routes = [
  {path: '',component: UclComponent},
  {path: 'caf',component: CafclComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
