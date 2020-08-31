import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotepadComponent } from './notepad/notepad.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  {
    path: "notes",
    component: NotepadComponent,
    pathMatch: "full"
  },
  { path: '**', redirectTo: 'notes', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    NotepadComponent,

  ],
  imports: [CommonModule, Ng2SearchPipeModule, FormsModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const AppRoutingComponents = [
];