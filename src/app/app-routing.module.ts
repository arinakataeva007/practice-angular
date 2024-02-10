import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {path: '', redirectTo:'News', pathMatch: 'full'},
  {path:'', component: LayoutComponent, children:[
    {path: 'News', component: NewsListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
