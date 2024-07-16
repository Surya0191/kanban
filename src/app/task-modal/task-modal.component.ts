import { Component, Input, Output } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-task-modal",
  templateUrl: "./task-modal.component.html",
  styleUrls: ["./task-modal.component.scss"],
})
export class TaskModalComponent {
  @Input() isActive: boolean = false;
  @Input() columnIndex: number = 0;
  @Output() close = new Subject<{
    isClose: boolean;
    task: string;
    columnIndex: number;
  }>();
  task: string = "";

  closeModal(isClose = true): void {
    this.close.next({
      isClose: isClose,
      task: this.task,
      columnIndex: this.columnIndex,
    });
    this.task = "";
  }

  addTask(): void {
    this.closeModal(false);
  }
}
