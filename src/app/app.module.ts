import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import {
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  DragDropModule,
} from "@angular/cdk/drag-drop";
import { RouterModule, Routes } from "@angular/router";
import { MainViewComponent } from "./pages/main-view/main-view.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TaskModalComponent } from "./task-modal/task-modal.component";
import { MainViewService } from "./main-view.service";

const routes: Routes = [{ path: "", component: MainViewComponent }];

@NgModule({
  declarations: [AppComponent, MainViewComponent, TaskModalComponent],
  imports: [
    BrowserModule,
    CommonModule,
    DragDropModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
