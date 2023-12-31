import { Lista } from './../Interfaces/interfaces';
import { AuthService } from './auth.service';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiInfoService } from './get-api-info.service';

@Injectable({
  providedIn: 'root'
})
export class ListGeneratorService implements OnInit{
  token: string = "";
  sDataUser: any | undefined;
  sList: Lista[] | undefined;
  url: string ='http://localhost:4400/lists';

  constructor(private router: Router, private AuthService: AuthService, private gai: GetApiInfoService) { }

  ngOnInit(): void {
    this.sDataUser = this.AuthService.currentUser;
  }

  async getLists(user:string){
    try {
      const resultado = await fetch(this.url)
      const listaCompleta = await resultado.json();
      const listaFiltrada = listaCompleta.filter((element:Lista) => {return element.user == user});
      return listaFiltrada;
    } catch (error) {
      alert('Error...')
    }
  }

  async postList(lista: Lista){
    try {
      await fetch(this.url,
        {
          method: 'POST',
          body: JSON.stringify(lista),
          headers: {'Content-type': 'application/json'}
        })
      this.router.navigate(['profile'])
    } catch (error) {
      console.log(error)
    }
  }

  async deleteList(id:number){
    try {
      await fetch(`${this.url}/${id}`,
        { method: 'DELETE' }
      )
      window.location.href = 'profile';
    } catch (error) {
      alert(error)
    }
  }

  async putList(lista: Lista) {
    try {
      await fetch(`${this.url}/${lista?.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(lista),
          headers: { 'Content-type': 'application/json' }
        }
      )
    } catch (error) {
      console.log(error)
    }
  }




}
