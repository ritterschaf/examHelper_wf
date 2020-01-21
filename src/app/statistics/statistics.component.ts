import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Question} from '../questions/question.model';
import {QuestionService} from '../questions/question.service';
import {StatisticService} from './statistic.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  answers: any[] = [];
  subscription: Subscription;
  statisticQuestionSub: Subscription;
  questions: Question[];

  deletable = false;
  right: number;
  wrong: number;
  amount: number;

  constructor(
      private questionService: QuestionService,
      private statisticservice: StatisticService,
      private alertCtrl: AlertController) {
    this.subscription = this.statisticservice.getValues().subscribe(message => {

      if (message) {
        console.log('message:', message);
        this.answers.push(message);
        this.right = this.answers[0].a[0];
        this.wrong = this.answers[0].a[1];
        this.amount = Number(this.right) + Number(this.wrong);
        console.log('generateStatistics - right: ', this.right);
        console.log('generateStatistics - wrong: ', this.wrong);
        this.showStastistic();
      } else {
        this.answers = [];
      }
    });
  }

  ngOnInit() {
    this.statisticQuestionSub = this.questionService.getQuestions().subscribe(newData => {
      this.questions = newData;
    });
  }


  generateStatistic(rights, wrongs) {
    this.questions = this.questionService.getAllQuestions();
    rights = 4;
    wrongs = 2;
    this.right = rights;
    this.wrong = wrongs;
    this.amount = rights + wrongs;
  }

  deleteQuestion(text: string) {
    this.alertCtrl.create({
      header: 'Sind Sie sicher?',
      message: 'Die Frage wirklich löschen?',
      buttons: [
        {
          text: 'Ja!',
          handler: () => {
            this.questionService.deleteQuestion(text);
          }
        },
        {
          text: 'Nein.',
          role: 'cancel'
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

  showStastistic() {
    this.questions = this.questions.filter(quest => {
      if (quest.rights >= 5) {
        return quest;
      }

    });
    this.deletable = true;
  }

}
