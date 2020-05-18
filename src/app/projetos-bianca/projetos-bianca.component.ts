import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  name: string, 
  created_at: string
}

@Component({
  selector: 'app-projetos-bianca',
  templateUrl: './projetos-bianca.component.html',
  styleUrls: ['./projetos-bianca.component.css']
})
export class ProjetosBiancaComponent implements OnInit {
  repositorios: Response;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.update();
  }

  update(){
    this.http.get<Response>('https://api.github.com/users/biancad2/repos')
    .subscribe(data => {
      this.repositorios = data;
    });
  }
  
}
