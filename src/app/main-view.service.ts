import { Injectable, Output } from "@angular/core";
import { Board } from "./models/board.model";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class MainViewService {
  @Output() boardUpdated = new Subject<Board>();

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

  getBoard() {
    return this.board;
  }

  addColumn(newColumnName: string) {
    if (newColumnName.trim()) {
      const newColumn = { columnName: newColumnName, tasks: [] };
      this.board.columns.unshift(newColumn);
      this.boardUpdated.next(this.board);
    }
  }

  deleteColumn(columnIndex: number) {
    if (columnIndex !== -1) {
      this.board.columns.splice(columnIndex, 1);
      this.boardUpdated.next(this.board);
    }
  }

  deleteTask(columnIndex: number, taskIndex: number) {
    if (columnIndex !== -1 && taskIndex !== -1) {
      this.board.columns[columnIndex].tasks.splice(taskIndex, 1);
      this.boardUpdated.next(this.board);
    }
  }

  addTask(modalData: { isClose: boolean; task: string; columnIndex: number }) {
    this.board.columns[modalData.columnIndex].tasks.unshift(modalData.task);
    this.boardUpdated.next(this.board);
  }
}
