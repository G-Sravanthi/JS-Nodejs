import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FactsComponent } from './facts/facts.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';

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
