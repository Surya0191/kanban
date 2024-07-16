import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Board } from "src/app/models/board.model";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Column } from "src/app/models/column.model";
import { MainViewService } from "src/app/main-view.service";

@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"],
})
export class MainViewComponent implements OnInit {
  isModalActive: boolean = false;
  modalColumnIndex: number = 0;
  editingBoardName: boolean = false;
  newColumnName: string = "";
  bsModalRef?: BsModalRef;

  constructor(private mainViewService: MainViewService) {}

  board: Board = this.mainViewService.getBoard();

  ngOnInit() {
    this.mainViewService.boardUpdated.subscribe((board: Board) => {
      this.board = board;
    });
  }

  addColumn() {
    this.mainViewService.addColumn(this.newColumnName);
    this.newColumnName = "";
  }

  deleteColumn(columnIndex: number) {
    this.mainViewService.deleteColumn(columnIndex);
  }

  deleteItem(columnIndex: number, taskIndex: number) {
    this.mainViewService.deleteTask(columnIndex,taskIndex);
  }

  openTaskModal(columnIndex: number) {
    this.isModalActive = true;
    this.modalColumnIndex = columnIndex;
  }

  closeModal(modalData: {
    isClose: boolean;
    task: string;
    columnIndex: number;
  }) {
    if (!modalData.isClose) {
      this.mainViewService.addTask(modalData);
    }
    this.isModalActive = false;
  }

  startEditing() {
    this.editingBoardName = true;
  }

  stopEditing() {
    this.editingBoardName = false;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
