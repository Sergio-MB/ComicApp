import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HerosService } from '../../services/heros.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  heros: any[] = [];
  term: string;

  constructor(private activatedRoute: ActivatedRoute,
    private _herosService: HerosService,
    private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      this.term = params['term'];
      this.heros = this._herosService.searchHeros(this.term);
    })
  }


  // showHero(index: number) {
  //   this.router.navigate(['/hero', index])
  // }



}
