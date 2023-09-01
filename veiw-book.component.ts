import { Component,OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../Book';

@Component({
  selector: 'app-veiw-book',
  templateUrl: './veiw-book.component.html',
  styleUrls: ['./veiw-book.component.css']
})
export class VeiwBookComponent implements OnInit {

  id:number=0;
  particularBook : Book = new Book();
  constructor(private route: ActivatedRoute, private libraryService: LibraryServiceService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.libraryService.getBookById(this.id).subscribe(data =>{
      this.particularBook = data;
      console.log(this.particularBook)
      
    })
  }

}
