import { CidadeService } from './cidade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private cidadeService: CidadeService){}

  ngOnInit() {
    this.consultar();
  }

  cidades = [
    { id: 1, nome: 'Uberlândia' },
    { id: 2, nome: 'São Paulo' },
    { id: 3, nome: 'Florianópolis' },
    { id: 4, nome: 'Curitiba' }
  ];

  consultar() {
    this.cidadeService.consultar()
    .then(dados => {
      this.cidades = dados;
    })
  }

  adicionar(nome: string) {
    this.cidadeService.adicionar({ nome })
    .then(cidade => {
      alert(`Cidade "${cidade.nome}" foi adicionada com o código : "${cidade.id}"`);
      this.consultar();
    });

  }

  excluir(id: number) {
    this.cidadeService.excluir(id)
    .then(() => {
      alert(`Cidade Excluida com sucesso!`);
      this.consultar();
    });

  }

  atualizar(cidade: any) {
    this.cidadeService.atualizar(cidade)
    .then(c => {
      alert(`Cidade "${c.nome}" alterada com sucesso!`);
    })
    .catch(erro => {
      alert(erro);
    });

  }

}
