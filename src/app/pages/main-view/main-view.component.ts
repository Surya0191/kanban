import { Component, OnInit } from "@angular/core";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Board } from "src/app/models/board.model";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"],
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag,CommonModule,FormsModule]
})
export class MainViewComponent implements OnInit {
  constructor() {}

  editingBoardName:boolean=false;
  newColumnName:string = '';

  board: Board = {
    name: "Test Board",
    columns: [
      {
        columnName: "Ideas",
        tasks: [
          "Some random idea",
          "This is another random idea",
          "build an awesome application",
        ],
      },
      {
        columnName: "Research",
        tasks: ["Lorem ipsum", "foo", "This was in the 'Research' column"],
      },
      {
        columnName: "Todo",
        tasks: ["Get to work", "Pick up groceries", "Go home", "Fall asleep"],
      },
      {
        columnName: "Done",
        tasks: [
          "Get up",
          "Brush teeth",
          "Take a shower",
          "Check e-mail",
          "Walk dog",
        ],
      },
    ],
  };

  ngOnInit() {}

  addColumn() {
    if (this.newColumnName.trim()) {
      const newColumn = { columnName: this.newColumnName, tasks: [] };
      this.board.columns.unshift(newColumn);;
      this.newColumnName = '';
    }
  }

  deleteColumn(column: any, columnIndex:number) {
    if (columnIndex !== -1) {
      this.board.columns.splice(columnIndex, 1);
    }
  }

  deleteItem(columnIndex:number, taskIndex:number){
    if (columnIndex !== -1 && taskIndex !== -1) {
      this.board.columns[columnIndex].tasks.splice(taskIndex, 1);
    }
  }

  startEditing(){
    this.editingBoardName = true;
  }

  stopEditing(){
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
