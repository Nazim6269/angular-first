import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Comment } from '../../../../comment.interface';
import { CommentService } from './comments.service';

@Component({
  selector: 'comment',
  templateUrl: './comments.component.html',
  imports: [NgFor],
  standalone: true,
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getComments().subscribe((commetns: Comment[]) => {
      this.comments = commetns;
    });

    console.log(this.comments);
  }
}
