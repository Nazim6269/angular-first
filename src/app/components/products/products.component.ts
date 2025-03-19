import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Comment } from '../../../../comment.interface';
import { CommentService } from '../comments/comments.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  imports: [NgFor, NgClass, NgOptimizedImage, RouterLink, RouterLinkActive],
  standalone: true,
})
export default class ProuductsComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getComments().subscribe((comments: Comment[]) => {
      this.comments = comments.slice(0, 20);
    });
  }
}
