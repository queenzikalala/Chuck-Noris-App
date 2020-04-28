import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { JokeComponent } from './components/joke/joke.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { JokesComponent } from './components/jokes/jokes.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
    children: [
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'jokes',
        component: JokesComponent
      },
      {
        path: '',
        redirectTo: 'category',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'joke',
    component: JokeComponent
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
