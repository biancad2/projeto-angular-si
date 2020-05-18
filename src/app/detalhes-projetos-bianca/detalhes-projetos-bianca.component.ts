import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface Response {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    html_url: string;
  };
  description: string;
  created_at: string;
  updated_at: string;

}

@Component({
  selector: 'app-detalhes-projetos-bianca',
  templateUrl: './detalhes-projetos-bianca.component.html',
  styleUrls: ['./detalhes-projetos-bianca.component.css']
})
export class DetalhesProjetosBiancaComponent implements OnInit {
  name;
  projeto;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.name = params.get('name');
        this.update();
      }
    );
  }

  update() {
    this.http.get<Response>('https://api.github.com/repos/biancad2/' + this.name)
      .subscribe(data => {
        this.projeto = data;
      });
  }

}
