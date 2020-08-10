import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { HerosService, Hero } from "../../services/heros.service"
@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent implements OnInit {


  @Input() hero: any = {};
  @Input() index: number;

  //@Output() heroSelected: EventEmitter<number>;

  constructor(private router: Router,
              private _herosService: HerosService) {

    // this.heroSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  showHero = () => {
    // const index = this._herosService.getIndex(this.hero)
    // console.log('hero:', this.hero, ", index: ",index)
    this.router.navigate(['/hero',this.index])
    //this.heroSelected.emit( this.index );
  }
}
