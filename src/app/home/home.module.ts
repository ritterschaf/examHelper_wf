import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {QuestionsComponent} from '../questions/questions.component';
import {KatexModule} from 'ng-katex';
import {MathComponent} from '../questions/math/math.component';
import {SheetComponent} from '../questions/sheet/sheet.component';
import {StatisticsComponent} from '../statistics/statistics.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KatexModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    declarations: [HomePage, QuestionsComponent, MathComponent, SheetComponent, StatisticsComponent]
})
export class HomePageModule {
}
