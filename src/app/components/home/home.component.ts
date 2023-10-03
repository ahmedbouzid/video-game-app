import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse, Game } from 'src/app/models/gameI';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   sort !: string ;

   games !: Array <Game>
   constructor(private service : ServiceService , private activatedRoute : ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params : Params)=> {
      if (params['game-search']) {
        this.searchGames('metacrit' , params['game-search'])
      } else {
        this.searchGames('metacrit')
      }
    })

  }
  searchGames(sort : string , search ?: string) : void{
    this.service
    .getGameLList(sort , search)
    .subscribe((gameList : APIResponse<Game>) => {
      this.games = gameList.results ;
      console.log('====================================');
      console.log(gameList);
      console.log('====================================');
    })
    console.log('====================================');
    console.log(sort);
    console.log('====================================');
  }


}
