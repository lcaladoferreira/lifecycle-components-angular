import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "components";
  ids: number[] = [];
  lastId: number = 0;
  // counter1: number = 0;

  delete(id: number) {
    this.ids.splice(this.ids.indexOf(id), 1);
  }

  add() {
    this.lastId++;
    this.ids.push(this.lastId);
  }

  // increment() {
  //   this.counter1++;
  // }
}
