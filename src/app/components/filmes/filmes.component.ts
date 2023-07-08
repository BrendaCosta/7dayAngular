import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {

  filmes: any[] = [];

  constructor (private http: HttpClient){}


  ngOnInit() {
    this.http.get<any>('assets/films.json').subscribe(data => {
      this.filmes = data.results;
      console.log(this.filmes)
    });
  }
}
