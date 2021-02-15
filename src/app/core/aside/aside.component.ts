import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../shared/interfaces/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  @Input() title: string;
  @Input() postList: IPost[];

  constructor(private postService: PostService) { }

  ngOnInit(): void { 
    this.postService.loadPost(5).subscribe(pList => {
      this.postList = pList;
    })
  }
}
