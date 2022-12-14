import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-admin-login-form-ui',
    templateUrl: './admin-login-form-ui.component.html',
    styleUrls: ['./admin-login-form-ui.component.scss']
})
export class AdminLoginFormUiComponent implements OnInit {

    formGroup!: FormGroup;

    @Input() formError = '';
    @Input() disabled?: boolean | null;
    @Output() login = new EventEmitter();

    constructor(
        private title: Title
            ) { 
            title.setTitle('Авторизация');
        }

    ngOnInit(): void {

        this.formGroup = new FormGroup({
            login: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }

    onFormChange() {
      this.formError = '';
    }

    onSubmit() {
      console.log("UI ", this.formGroup.value);
      this.login.emit(this.formGroup.value);
    }
}
