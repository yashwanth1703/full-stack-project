import { Component,OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';
import { Book } from '../Book';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  id:number=0;
  book:Book=new Book();
  constructor(private libraryService:LibraryServiceService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.libraryService.getBookById(this.id).subscribe(data => {
      this.book = data;

    },error => console.log(error));
    
    
  }
  onSubmit(){
    this.libraryService.updateBook(this.id,this.book).subscribe(data=>{
      this.getAllBooks();
    } ,error => console.log(error));
  }
  getAllBooks(){
    this.router.navigate(['/library']);
  }

}
