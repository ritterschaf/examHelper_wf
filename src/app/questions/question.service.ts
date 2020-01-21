import {Injectable} from '@angular/core';
import {Question} from './question.model';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Platform} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {File} from '@ionic-native/file/ngx';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {
    whatever: any;
    private highestId;
    private questionSubject = new BehaviorSubject([]);
    private requestURL = 'https://api.myjson.com/bins/ur4qw';
    private questionsS: Question[] = [];

    constructor(
        private plt: Platform,
        private http: HttpClient, public file: File) {

    }

    jsonload() {

        // hier jetzt die JSON Datei laden...
        let jsonarray;
        let that = this;
        var request = new XMLHttpRequest();
        request.open('GET', this.requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function() {
            jsonarray = request.response;
            console.log('jsonarray = ', jsonarray);
            that.questionsS = jsonarray;
            that.highestId = that.questionsS.length;
            that.questionSubject.next(that.questionsS);

            if (Notification.permission === 'granted') {
                navigator.serviceWorker.getRegistration().then(function(reg) {
                    reg.showNotification('JSON erfolgreich geladen.');
                });
            }
        };


    }

    saveQuestion(data) {

        this.questionsS.push({
            id: this.highestId + 1,
            question: data[0],
            answera: data[1],
            answerb: data[2],
            answerc: data[3],
            answerd: data[4],
            type: data[5],
            rights: 0
        });
        this.highestId++;

        this.questionSubject.next(this.questionsS);
    }


    checkQuestion(que: string, answer: string) {
        return {
            ...this.questionsS.find(question => {
                return question.question === que;
            })
        };
    }

    updateRights(que: string) {

        for (const ques of this.questionsS) {
            if (ques.question === que) {
                ques.rights = ques.rights + 1;
                console.log('new rights: ', ques.rights);
                this.questionSubject.next(this.questionsS);
            }
        }
    }

    // -- ** -- ** Observable Funktionen -- ** -- **


    getAllQuestions() {
        return [...this.questionsS];
        // returns a COPY of this questions-array
    }

    getQuestions(): Observable<Question[]> {
        return this.questionSubject.asObservable();
    }

    deleteQuestion(questiontext) {
        this.questionsS = this.questionsS.filter(question => {
            return question.question !== questiontext;
        });
        this.questionSubject.next(this.questionsS);
        console.log('New array:', this.questionsS);
    }


    writeToFile() {

        return this.file.writeExistingFile(this.file.dataDirectory, 'questions.json', JSON.stringify(this.questionsS))
            .then(() => {
                console.log('Executed Filework');
                this.jsonload();

            });
    }



}


