import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HelpComponent } from './component/help/help.component';
import { NewsComponent } from './component/news/news.component';
import { FactsComponent } from './component/facts/facts.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  { path:'about',component:AboutComponent},
  { path: 'facts',component: FactsComponent },
  { path:'help',component: HelpComponent},
  { path:'news',component:NewsComponent },
  { path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
