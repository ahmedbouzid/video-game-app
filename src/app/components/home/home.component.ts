import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/models/gameI';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {
   sort !: string ;

   games !: Array <Game>
   routeS !: Subscription ;
   gameS !: Subscription ;
   constructor(private service : ServiceService ,
     private activatedRoute : ActivatedRoute,
     private router : Router
     ){}
  ngOnInit(): void {
 this.routeS =   this.activatedRoute.params.subscribe((params : Params)=> {
      if (params['game-search']) {
        this.searchGames('metacrit' , params['game-search'])
      } else {
        this.searchGames('metacrit')
      }
    })

  }
  searchGames(sort : string , search ?: string) : void{
 this.gameS =   this.service
    .getGameLList(sort , search)
    .subscribe((gameList : APIResponse<Game>) => {
      this.games = gameList.results ;
      console.log('====================================');
      console.log(this.games);
      console.log('====================================');
    })
    console.log('====================================');
    console.log(sort);
    console.log('====================================');
  }

  openGameDetails(id : number){
    this.router.navigate(['details' , id])

  }

  ngOnDestroy(): void {
    if (this.gameS) {
      this.gameS.unsubscribe();
    }

    if (this.routeS) {
      this.routeS.unsubscribe();
    }
  }
}
