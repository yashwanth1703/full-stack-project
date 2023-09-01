import { Component,OnInit } from '@angular/core';
import { Book } from '../Book';
import { LibraryServiceService } from '../library-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent  {

  constructor(private libraryService : LibraryServiceService,
    private router: Router) { }

    book : Book = new Book();

    saveBook(){
      this.libraryService.createBook(this.book).subscribe( data =>{
        console.log(data);
        this.getBooksList();
      },
      error => console.log(error));

      
    }
  getBooksList() {
    this.router.navigate(['/library']);
  }
  
  OnSubmit(){
    console.log(this.book);
    this.saveBook();
  }

}
