import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";
import {DynamicFormQuestionComponent} from "./dynamic-form-question/dynamic-form-question.component";

const routes: Routes = [
    {path: 'dc', component: DynamicFormComponent},
    {path: 'dq', component: DynamicFormQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
