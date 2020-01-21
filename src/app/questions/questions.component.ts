import {Component, OnInit, OnDestroy, ViewChild, Input} from '@angular/core';
import {QuestionService} from './question.service';
import {Question} from './question.model';
import {AlertController, IonSlides} from '@ionic/angular';
import {StatisticService} from '../statistics/statistic.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit, OnDestroy {
    @Input() usejsonQ: boolean;
    questionSub: Subscription;
    public boxes = 'questionbox';
    questions: Question[];
    toBeChecked: Question;

    private requestURL = 'https://api.myjson.com/bins/trtfy';
    private rightAnswers: number;
    private wrongAnswers: number;

    @ViewChild('examslider', {static: false}) examslider: IonSlides;

    slideOpts = {
        slidesPerView: 1,
        lockSwipes: true,
        allowTouchMove: false,
        lockSwipeToNext: true,
        lockSwipeToPrev: true,
    };

    equation: string;
    ques: string;
    ansA: string;
    ansB: string;
    ansC: string;
    ansD: string;
    type: string;

    constructor(
        private questionService: QuestionService,
        private alertCtrl: AlertController,
        private statisticService: StatisticService
    ) {
        this.questionSub = this.questionService.getQuestions().subscribe(newData => {
            this.questions = newData;
            console.log('I was updated!');
        });
    }

    ngOnInit() {

        this.rightAnswers = 0;
        this.wrongAnswers = 0;

        if (this.usejsonQ === true) {
            this.jsonload();
        }
    }

    ngOnDestroy(): void {
        this.questionSub.unsubscribe();
    }

    switch(box) {

        if (box === 'exambox') {
            const statDiv = document.getElementById('stat_component');
            console.log('opacity = ', statDiv.style.opacity);
            if (statDiv.style.opacity === '1') {
                statDiv.style.opacity = '0.0';
                statDiv.style.color = 'white';
            }
        }
        this.boxes = box;
    }

    radioSelect(event) {
        console.log('radio: ', event.detail.value);
        this.type = event.detail.value;
    }

    jsonload() {
        this.questionService.jsonload();
    }

    saveQuestion() {
        console.log(this.type);
        if (this.ques === undefined || this.ques === '' ||
            this.ansA === undefined || this.ansA === '' ||
            this.ansB === undefined || this.ansB === '' ||
            this.ansC === undefined || this.ansC === '' ||
            this.ansD === undefined || this.ansD === '') {

            this.alertCtrl.create({
                message: 'Bitte alles ausfüllen.',
                buttons: [{text: 'Back', role: 'cancel'}]
            }).then(alertEl => {
                alertEl.present();
            });
            return;
        } else {
            if (this.type === undefined) {
                this.type = 'text';
            }
            const array: string[] = [this.ques, this.ansA, this.ansB, this.ansC, this.ansD, this.type];
            this.questionService.saveQuestion(array);
        }
        this.ques = '';
        this.ansA = '';
        this.ansB = '';
        this.ansC = '';
        this.ansD = '';
    }

    checkQuestion(que, answer) {
        this.toBeChecked = this.questionService.checkQuestion(que, answer);

        if (this.toBeChecked.answera === answer) {
            this.rightAnswers = this.rightAnswers + 1;
            this.questionService.updateRights(que);
        } else {
            this.wrongAnswers = this.wrongAnswers + 1;

        }
        this.examslider.slideNext(500);
    }


    sendToStatistic() {
        this.statisticService.generateStatistic(this.rightAnswers, this.wrongAnswers);
        this.wrongAnswers = 0;
        this.rightAnswers = 0;

        this.switch('statistic');
        const div = document.getElementById('stat_component');
        div.style.opacity = '1';
        div.style.color = 'black';
    }

    clearStatistic(): void {
        this.statisticService.clearValues();
    }


}
