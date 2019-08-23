import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'project-blog';

  postList = [
    {
      title: 'Post 1',
      content: 'mon premier post',
      loveIts: 1,
      createdAt: new Date(2018, 7, 15, 16, 45)
    },
    {
      title: 'Post 2',
      content: 'mon second post',
      loveIts: -1,
      createdAt: new Date()
    },
  ];

 /* onAddPost() {
    console.log('Creating a new Post');

    this.postList.push({
      title: 'Post ' + (this.postList.length + 1).toString(),
      content: 'And another one',
      loveIts: 0,
      createdAt: new Date()
      });
  }*/
}
