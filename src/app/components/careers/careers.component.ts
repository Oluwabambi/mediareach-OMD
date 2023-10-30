import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
})
export class CareersComponent implements OnInit {
  files: File[] = [];
  rejectedFile: boolean = false;
  isLoading: boolean = false;
  submitted: boolean = false;

  uploadData = new FormData();
  addedFile: any;

  careersForm = new FormGroup({
    country: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  onSelect(event: any) {
    console.log(event);
    if (event.rejectedFiles.length > 0) {
      this.rejectedFile = true;
    } else {
      this.files.push(...event.addedFiles);
      this.addedFile = event.addedFiles[0];
      this.uploadData.append('file', this.addedFile);
      this.rejectedFile = false;
    }
  }

  fileUpload() {
    this.isLoading = true;
    this.submitted = true;
    // const descValue: any = this.description.value;
    this.uploadData.append('country', `${this.careersForm.value.country}`)
    this.uploadData.append('firstName', `${this.careersForm.value.firstName}`);
    this.uploadData.append('lastName', `${this.careersForm.value.lastName}`);
    this.uploadData.append('email', `${this.careersForm.value.email}`)
    this.uploadData.append('phoneNumber', `${this.careersForm.value.phoneNumber}`)
    this.uploadData.append('code', `${this.careersForm.value.code}`);
  }
}
