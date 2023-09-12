import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

//Libreria agregadas
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

//Componentes agregados
import { TablaComponent } from './tabla/tabla.component';

@NgModule({
	declarations: [
		AppComponent,
		TablaComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgxDatatableModule
	],
	providers: [ AppService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
