import {NgModule} from '@angular/core';
import {SearchCityComponent} from './search-city.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [SearchCityComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [SearchCityComponent]
})
export class SearchCityModule {
}
