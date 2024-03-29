import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CurrencyConverterModule } from '../ui/currency-converter/currency-converter.module';
import { AdminHeaderBlockComponent } from './blocks/admin-header-block/admin-header-block.component';
import { WeahterForecastModule } from '../ui/weather-forecast/weather-forecast.module';

@NgModule({
    declarations: [
        AdminHeaderBlockComponent
    ],
    exports: [
        AdminHeaderBlockComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        CurrencyConverterModule,
        WeahterForecastModule
    ]
})
export class AdminHeaderBlockModule { }
