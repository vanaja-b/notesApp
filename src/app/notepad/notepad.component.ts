import { Component, OnInit } from '@angular/core';
import { CommonApiCallService } from '../services/commonApiCall.service';
import * as moment from 'moment';
import { element } from 'protractor';
@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: []
})
export class NotepadComponent implements OnInit {
  public noteDetails: Array<any> = [];
  public noteContent: any = {};
  public moment: any = moment;
  public deltebtnVisible: boolean = false;
  public todayDate: Date = new Date();
  searchedKeyword: string;

  constructor(private commonSerive: CommonApiCallService) { }
  ngOnInit() {
    this.getNoteDetails();
  }
  /*********************************************************************************
        @PURPOSE      : Get the Note Details
  /*********************************************************************************/
  getNoteDetails() {
    if (this.commonSerive.getToken('notesData')) {
      this.noteDetails = JSON.parse(this.commonSerive.getToken('notesData'));
      this.noteContent = this.noteDetails[0];
    }
  }
  /********************************************************************************** */
  /*********************************************************************************
        @PURPOSE      : Get the particular note content
  /*********************************************************************************/
  getConent(note) {
    this.noteContent = note;
    this.deltebtnVisible = true
  }
  /**************************************************************************** */
  /*********************************************************************************
      @PURPOSE      : Update the note content
  /*********************************************************************************/
  UpdateNotesConent(data) {
    this.noteDetails.forEach(element => {
      if (element.id == data.id) {
        element = data;
        this.commonSerive.setToken('notesData', JSON.stringify(this.noteDetails))
      }
    })
  }
  /***************************************************************************** */

  /*********************************************************************************
        @PURPOSE      : Add for Notes
  /*********************************************************************************/
  addNotes() {
    this.noteDetails.push({ name: 'New Note', date: new Date(), id: Date.now() })
    this.commonSerive.setToken('notesData', JSON.stringify(this.noteDetails))
  }
  /************************************************************************* */

  /*********************************************************************************
        @PURPOSE      : Delete Particular note
  /*********************************************************************************/
  deleteNote(noteContent) {
    this.noteDetails.forEach((element, i) => {
      if (element.id == noteContent.id) {
        this.noteDetails.splice(i, 1)
        this.commonSerive.setToken('notesData', JSON.stringify(this.noteDetails));
        this.noteContent = {};
      }
    })
  }
}
/********************************************************************************** */
