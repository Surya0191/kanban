import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { RouterModule, Routes } from "@angular/router";
import { MainViewComponent } from "./pages/main-view/main-view.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {path:'', component:MainViewComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    DragDropModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
