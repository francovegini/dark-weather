import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../api.service';

@Component({
    selector: 'app-search-city',
    templateUrl: './search-city.component.html',
    styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {

    public searchForm: FormGroup;
    public result: string;

    constructor(private fb: FormBuilder,
                private apiService: ApiService) {
    }

    ngOnInit() {
        this.searchForm = this.fb.group({
            state: this.fb.control('', [Validators.required]),
            city: this.fb.control('', [Validators.required, Validators.minLength(5)])
        });

    }

    searchCity() {
        this.getIdByNameOrState(this.searchForm.value.city, this.searchForm.value.state);
    }

    getIdByNameOrState(name?: string, state?: string) {
        this.apiService.getIdByNameOrState(name, state)
            .subscribe((data: any) => {
                if (data.length === 1) {
                    this.result = data[0].id.toString();
                } else {
                    this.result = 'Não foi encontrado um ID pra essa cidade.';
                }
            });
    }

}
