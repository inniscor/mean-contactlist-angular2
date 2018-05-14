import { Injectable } from '@angular/core';
import { Player } from './player';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlayerService {
    private playersUrl = '/api/players';

    constructor (private http: Http) {}

    // get("/api/players")
    getPlayers(): Promise<Player[]> {
      return this.http.get(this.playersUrl)
                 .toPromise()
                 .then(response => response.json() as Player[])
                 .catch(this.handleError);
    }

    // post("/api/players")
    createPlayer(newPlayer: Player): Promise<Player> {
      return this.http.post(this.playersUrl, newPlayer)
                 .toPromise()
                 .then(response => response.json() as Player)
                 .catch(this.handleError);
    }

    // get("/api/players/:id") endpoint not used by Angular app

    // delete("/api/players/:id")
    deletePlayer(delPlayerId: String): Promise<String> {
      return this.http.delete(this.playersUrl + '/' + delPlayerId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/players/:id")
    updatePlayer(putPlayer: Player): Promise<Player> {
      var putUrl = this.playersUrl + '/' + putPlayer._id;
      return this.http.put(putUrl, putPlayer)
                 .toPromise()
                 .then(response => response.json() as Player)
                 .catch(this.handleError);
    }

    private handleError (error: any): Promise<any> {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Promise.reject(errMsg)
    }
}
