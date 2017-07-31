import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    nom='Fruits';
 ajout= 'ajouter fruit';

 public fruits= [] = [];
 public fruit= '' ;


    addFruit() {

        if (this.fruits.indexOf(this.fruit) === -1) {
            // this.fruits.push(this.fruit);
            this.fruits.push(this.fruit.toLowerCase());

        } else {
            this.fruit = '';
            alert("vous aves déjà listé ce fruit");
        }
    }


 deleteFruit(fruit: string) {
     // fruit=l'index du fruit dant le tableau
     // ,1 vaut suppression de l'élément si 0 aucune supression
   this.fruits.splice(this.fruits.indexOf(fruit), 1);
 }
}
