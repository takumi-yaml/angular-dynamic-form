import {Component} from '@angular/core';

import {QuestionService} from './question.service';

@Component({
    templateUrl: './app.component.html',
    selector: 'app-root',
    providers: [QuestionService]
})
export class AppComponent {
    questions: any[];

    constructor(service: QuestionService) {
        this.questions = service.getQuestions();
    }
}