import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { VeiwBookComponent } from './veiw-book/veiw-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { SignInComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'library', component: BookListComponent},
  {path: 'create-Book', component: CreateBookComponent},
  {path:  'veiw-book-details/:id',component:VeiwBookComponent},
  {path:  'update-book/:id',component:UpdateBookComponent},
  {path: 'sign-in',component:SignInComponent},
  {path: 'sign-up',component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
