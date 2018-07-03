import { Component,
   OnInit,
   OnChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy,
   SimpleChanges } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewChecked,
                                                            AfterContentChecked, AfterViewInit, OnDestroy {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
      console.log('Constructor Called');
   }

   ngOnInit() {
      console.log('ngOnInit Called');
   }

   ngOnChanges(simpleChanges: SimpleChanges) {
      console.log('ngOnChanges Called', simpleChanges);
   }

   ngDoCheck() {
      console.log('ngOnDoCheck Called');
   }

   ngAfterContentInit() {
      console.log('ngAfterContentInit Called');
   }

   ngAfterContentChecked() {
      console.log('ngAfterContentChecked Called');
   }

   ngAfterViewInit() {
      console.log('ngAfterViewInit Called');
   }

   ngAfterViewChecked() {
      console.log('ngAfterViewChecked Called');
   }

   ngOnDestroy() {
      console.log('ngOnDestroy Called');
   }

   getHeroes(): void {
      this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
   }
}
