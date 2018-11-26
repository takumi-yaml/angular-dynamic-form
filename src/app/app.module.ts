import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {DynamicFormQuestionComponent} from './dynamic-form-question/dynamic-form-question.component';

@NgModule({
    declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent
    ],
    imports: [
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
