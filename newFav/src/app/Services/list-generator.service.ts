import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'app/Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListGeneratorService {

  url: string ='http://localhost:4000/lists';

  constructor(private router: Router) { }


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
      //habria que cambiar aca a la direccion de donde este la lista
      window.location.href = 'profile.html'
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
