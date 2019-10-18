import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
    selector: 'app-search-city',
    templateUrl: './search-city.component.html',
    styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {

    @Output() searchEvent = new EventEmitter<string>();

    public searchForm: FormGroup;
    public result: string;

    constructor(private fb: FormBuilder,
                private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.searchForm = this.fb.group({
            state: this.fb.control('', [Validators.required]),
            city: this.fb.control('', [Validators.required, Validators.minLength(5)])
        });
    }

    private sendEvent(): void {
        this.searchEvent.emit(this.result);
    }

    private searchCity(): void {
        this.getIdByNameOrState(this.searchForm.value.city, this.searchForm.value.state);
    }

    private getIdByNameOrState(name: string, state: string) {
        this.apiService.getIdByNameOrState(name, state)
            .subscribe((data: any) => {
                this.checkReturn(data);
            });
    }

    private checkReturn(data: any): void {
        if (data.length === 1) {
            this.result = data[0].id.toString();
            this.sendEvent();
        } else {
            this.result = 'Nenhuma cidade encontrada!';
        }
    }

}
