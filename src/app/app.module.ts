import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';
import { NavbarModule } from './features/navbar/navbar.module';
import { SearchCityModule } from './features/search-city/search-city.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        WeatherModule,
        HttpClientModule,
        HttpModule,
        NavbarModule,
        SearchCityModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
