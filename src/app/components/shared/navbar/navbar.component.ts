import { Component } from '@angular/core';
import { HerosService, Hero} from '../../../services/heros.service'
import { Router } from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  constructor(private router: Router) { }


  searchHeros = ( term: string, input:HTMLInputElement) => {

    input.value="";
    this.router.navigate(['/search', term])

  }


}
