import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {

  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  sort(column: string): void {
    // array.sort modifies the array, sorting the items based on the given compare function
    this.satellites.sort(function(a: Satellite, b: Satellite): number {
       if(a[column] < b[column]) {
          return -1;
       } else if (a[column] > b[column]) {
          return 1;
       }
       return 0;
    });
 }

 //added this method but have to figure it out how to get it to work. Does something need to be passed to it? At which point does "satellites" populate with things so that I can access its length? The point of this is to pass a boolean to the [class.zebra] which will toggle whether or not the .zebra class will activate on that row. I am trying to accomplish this by selected either the even or odd rows. 
 zebraStripes(): boolean {
    for (let i = 0; i < this.satellites.length; i++) {
       console.log(i);
       if (i % 2) {
          return true;
       } else {
          return false;
       }
    }
 }

}
