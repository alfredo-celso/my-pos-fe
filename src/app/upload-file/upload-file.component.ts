import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  public filePath;
  fileURL: any;
  public message: string;

  constructor() {

   }

  preview(files) {
    if (files.length === 0){
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/.csv\/*/) == null) {
    this.message = 'Only JSON are supported...';
      return;
    }

    const reader = new FileReader();
    this.filePath = files;
    reader.readAsText(files[0]);
    reader.onload = (_event) => {
      this.fileURL = reader.result;
    };


  }
}
