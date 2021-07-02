import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'jstree-test';

  ngOnInit() {
    $('#mytree').jstree({core: {
      data: (node: any, cb: any) => {
        cb.call(this, this.getChild());
      }
    }});
  }

  getChild() {
      return [
        {text: 'root1', children: true},
        {text: 'root2'},
      ]
  }

  // getChild() {
  //   setTimeout(() => {
  //     return [
  //       {text: 'root1', children: true},
  //       {text: 'root2'},
  //     ]
  //   }, 3000);
  // }
}

