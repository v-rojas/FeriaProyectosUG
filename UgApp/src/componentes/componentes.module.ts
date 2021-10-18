import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RateComponent } from './rate/rate.component';

@NgModule({
    entryComponents: [RateComponent],
    declarations: [
       RateComponent
    ],
    exports: [
        RateComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IonicModule
    ]
})
export class ComponentesModule { }
