import { NgModule }      from '@angular/core';
import { RouterModule, Routes }				 from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ButtonModule,
	SelectItem,
	DropdownModule,
	InputTextModule,
	CheckboxModule,
	RadioButtonModule,
	SelectButtonModule,
	DialogModule,
	FieldsetModule,
	PanelModule,
	TabViewModule,
	}  from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';

import { Globals } from './globals'

import { AppComponent }  from './app.component';
import { StartComponent } from './start.component';
import { Q1Component } from './q1.component';
import { Q2Component } from './q2.component';
import { Q3Component } from './q3.component';
import { Q4Component } from './q4.component';
import { Q5Component } from './q5.component';
import { Q6Component } from './q6.component';
import { Q7Component } from './q7.component';
import { Q8Component } from './q8.component';
import { Q9Component } from './q9.component';
import { Q10Component } from './q10.component';
import { Q11Component } from './q11.component';
import { Q12Component } from './q12.component';
import { Q13Component } from './q13.component';
import { Q14Component } from './q14.component';
import { Q15Component } from './q15.component';

import { AppService } from './app.service';

@NgModule({
  imports:      [
		HttpModule,
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		ButtonModule,
		DropdownModule,
		InputTextModule,
		CheckboxModule,
		RadioButtonModule,
		SelectButtonModule,
		DialogModule,
		FieldsetModule,
		PanelModule,
		TabViewModule,
	],
  declarations: [
		AppComponent,
		StartComponent,
		Q1Component,
		Q2Component,
		Q3Component,
		Q4Component,
		Q5Component,
		Q6Component,
		Q7Component,
		Q8Component,
		Q9Component,
		Q10Component,
		Q11Component,
		Q12Component,
		Q13Component,
		Q14Component,
		Q15Component,
	],
	providers: [
		Globals,
		AppService
	],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
