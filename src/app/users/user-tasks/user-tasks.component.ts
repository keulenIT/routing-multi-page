import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterLink, RouterOutlet],
})
export class UserTasksComponent {
  private UsersService = inject(UsersService);
  userId = input.required<string>();

  userName = computed(
    () => this.UsersService.users.find((u) => u.id === this.userId())?.name
  );
}
