import { Component, computed, inject, input } from '@angular/core';
import { User } from '../user/user.model';
import { UsersService } from '../users.service';
import { TasksService } from '../../tasks/tasks.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet],
})
export class UserTasksComponent {
  private UsersService = inject(UsersService);
  private TasksService = inject(TasksService);
  userId = input.required<string>();

  userName = computed(
    () => this.UsersService.users.find((u) => u.id === this.userId())?.name
  );

  userTasks = computed(() => {
    const tasks = this.TasksService.allTasks().find(
      (t) => t.userId === this.userId()
    );
    return tasks ? [tasks] : [];
  });
}
