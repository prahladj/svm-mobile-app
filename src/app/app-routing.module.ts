import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'first-with-tabs', loadChildren: './pages/first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule' },
  { path: 'second', loadChildren: './pages/second/second.module#SecondPageModule' },
  { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './pages/tab3/tab3.module#Tab3PageModule' },
  { path: 'upanyasa', loadChildren: './pages/upanyasa/upanyasa.module#UpanyasaPageModule' },
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' },
  { path: 'add-user', loadChildren: './pages/add-user/add-user.module#AddUserPageModule' },
  { path: 'saint-details', loadChildren: './pages/saint-details/saint-details.module#SaintDetailsPageModule' },
  { path: 'about-vyasarajaru', loadChildren: './pages/about-vyasarajaru/about-vyasarajaru.module#AboutVyasarajaruPageModule' },
  { path: 'about-us', loadChildren: './pages/about-us/about-us.module#AboutUsPageModule' },
  { path: 'branches-of-matha', loadChildren: './pages/branches-of-matha/branches-of-matha.module#BranchesOfMathaPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
