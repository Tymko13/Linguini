import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-edit-avatar',
  standalone: true,  // if you're using standalone components
  imports: [NgFor],
  templateUrl: './edit-avatar.component.html',
  styleUrls: ['./edit-avatar.component.scss']
})
export class EditAvatarComponent implements OnInit {
  selectedUrl: string = '';
  avatarPlaceholders = new Array(12);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.selectedUrl = '';
  }

  goBack(): void {
    this.router.navigate(['/profile']);
  }

  selectAvatar(index: number): void {
    alert(`Selected placeholder ${index + 1}`);
  }
}
