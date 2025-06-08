import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import {AvatarService} from '../_services/avatar.service';

@Component({
  selector: 'app-edit-avatar',
  standalone: true,  // if you're using standalone components
  imports: [NgFor],
  templateUrl: './edit-avatar.component.html',
  styleUrls: ['./edit-avatar.component.scss']
})
export class EditAvatarComponent implements OnInit {
  selectedUrl = [''];
  avatarPlaceholders = [];

  constructor(
    private router: Router,
    private avatarService: AvatarService
  ) {}

  async ngOnInit() {
    this.avatarService.skintones.subscribe(skintones => {
      this.selectedUrl = skintones;
    });
  }

  goBack(): void {
    this.router.navigate(['/profile']);
  }

  selectAvatar(index: number): void {
    alert(`Selected placeholder ${index + 1}`);
  }
}
