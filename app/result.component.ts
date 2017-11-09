import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './globals';

@Component({
	selector: 'result',
	templateUrl: 'result.component.html',
	styles: [`
	`]
})

export class ResultComponent {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	public prods = this.globals.prods;

	dailyProds: { [key: string]: any } = [];
	fridayProds: { [key: string]: any } = [];
	weekendProds: { [key: string]: any } = [];

	selectedProds: { [key: string]: any } = [];

	goBack() {
		this.router.navigate(['/q15']);
	}

	goNext() {
		this.clear();	// 홉으로 돌아갈 때 모든 정보 clear

		this.router.navigate(['/start']);
	}

	ngOnInit(): void {
		const dailyL: number[] = this.globals.dailyL;
		const dailyU: number[] = this.globals.dailyU;

		const fridayL: number[] = this.globals.fridayL;
		const fridayU: number[] = this.globals.fridayU;

		const weekendL: number[] = this.globals.weekendL;
		const weekendU: number[] = this.globals.weekendU;

		this.recommendDaily(dailyL, dailyU);
		this.recommendFriday(fridayL, fridayU);
		this.recommendWeekend(weekendL, weekendU);
	}

	recommendDaily(look: number[], under: number[]) {
		this.dailyProds = [];

		if ( look.indexOf(1) != -1 ) {
			if ( under.indexOf(1) != -1 ) this.dailyProds.push(this.prods[1]);
			if ( under.indexOf(2) != -1 ) this.dailyProds.push(this.prods[2]);
			if ( under.indexOf(3) != -1 ) this.dailyProds.push(this.prods[37]);
			if ( under.indexOf(4) != -1 ) this.dailyProds.push(this.prods[4]);
			if ( under.indexOf(5) != -1 ) this.dailyProds.push(this.prods[38]);
			if ( under.indexOf(6) != -1 ) this.dailyProds.push(this.prods[5]);
			if ( under.indexOf(7) != -1 ) this.dailyProds.push(this.prods[9]);
		}
		else if ( look.indexOf(2) != -1 ) {
			if ( under.indexOf(1) != -1 )
				if ( this.dailyProds.indexOf(this.prods[3]) == -1 ) this.dailyProds.push(this.prods[3]);
			if ( under.indexOf(2) != -1 )
				if ( this.dailyProds.indexOf(this.prods[4]) == -1 ) this.dailyProds.push(this.prods[4]);
			if ( under.indexOf(3) != -1 )
				if ( this.dailyProds.indexOf(this.prods[37]) == -1 ) this.dailyProds.push(this.prods[37]);
			if ( under.indexOf(4) != -1 )
				if ( this.dailyProds.indexOf(this.prods[9]) == -1 ) this.dailyProds.push(this.prods[9]);
			if ( under.indexOf(5) != -1 )
				if ( this.dailyProds.indexOf(this.prods[19]) == -1 ) this.dailyProds.push(this.prods[19]);
			if ( under.indexOf(6) != -1 )
				if ( this.dailyProds.indexOf(this.prods[10]) == -1 ) this.dailyProds.push(this.prods[10]);
			if ( under.indexOf(7) != -1 )
				if ( this.dailyProds.indexOf(this.prods[39]) == -1 ) this.dailyProds.push(this.prods[39]);
		}
		else if ( look.indexOf(3) != -1 ) {
			if ( under.indexOf(1) != -1 )
				if ( this.dailyProds.indexOf(this.prods[3]) == -1 ) this.dailyProds.push(this.prods[3]);
			if ( under.indexOf(2) != -1 )
				if ( this.dailyProds.indexOf(this.prods[4]) == -1 ) this.dailyProds.push(this.prods[4]);
			if ( under.indexOf(3) != -1 )
				if ( this.dailyProds.indexOf(this.prods[37]) == -1 ) this.dailyProds.push(this.prods[37]);
			if ( under.indexOf(4) != -1 )
				if ( this.dailyProds.indexOf(this.prods[6]) == -1 ) this.dailyProds.push(this.prods[6]);
			if ( under.indexOf(5) != -1 )
				if ( this.dailyProds.indexOf(this.prods[19]) == -1 ) this.dailyProds.push(this.prods[19]);
			if ( under.indexOf(6) != -1 )
				if ( this.dailyProds.indexOf(this.prods[10]) == -1 ) this.dailyProds.push(this.prods[10]);
			if ( under.indexOf(7) != -1 )
				if ( this.dailyProds.indexOf(this.prods[40]) == -1 ) this.dailyProds.push(this.prods[40]);
		}
		else if ( look.indexOf(4) != -1 ) {
			if ( under.indexOf(1) != -1 )
				if ( this.dailyProds.indexOf(this.prods[7]) == -1 ) this.dailyProds.push(this.prods[7]);
			if ( under.indexOf(2) != -1 )
				if ( this.dailyProds.indexOf(this.prods[6]) == -1 ) this.dailyProds.push(this.prods[6]);
			if ( under.indexOf(3) != -1 )
				if ( this.dailyProds.indexOf(this.prods[37]) == -1 ) this.dailyProds.push(this.prods[37]);
			if ( under.indexOf(4) != -1 )
				if ( this.dailyProds.indexOf(this.prods[8]) == -1 ) this.dailyProds.push(this.prods[8]);
			if ( under.indexOf(5) != -1 )
				if ( this.dailyProds.indexOf(this.prods[33]) == -1 ) this.dailyProds.push(this.prods[33]);
			if ( under.indexOf(6) != -1 )
				if ( this.dailyProds.indexOf(this.prods[41]) == -1 ) this.dailyProds.push(this.prods[41]);
			if ( under.indexOf(7) != -1 )
				if ( this.dailyProds.indexOf(this.prods[41]) == -1 ) this.dailyProds.push(this.prods[41]);
		}
		else if ( look.indexOf(5) != -1 ) {
			if ( under.indexOf(1) != -1 )
				if ( this.dailyProds.indexOf(this.prods[1]) == -1 ) this.dailyProds.push(this.prods[1]);
			if ( under.indexOf(2) != -1 )
				if ( this.dailyProds.indexOf(this.prods[2]) == -1 ) this.dailyProds.push(this.prods[2]);
			if ( under.indexOf(3) != -1 )
				if ( this.dailyProds.indexOf(this.prods[37]) == -1 ) this.dailyProds.push(this.prods[37]);
			if ( under.indexOf(4) != -1 )
				if ( this.dailyProds.indexOf(this.prods[6]) == -1 ) this.dailyProds.push(this.prods[6]);
			if ( under.indexOf(5) != -1 )
				if ( this.dailyProds.indexOf(this.prods[4]) == -1 ) this.dailyProds.push(this.prods[4]);
			if ( under.indexOf(6) != -1 )
				if ( this.dailyProds.indexOf(this.prods[5]) == -1 ) this.dailyProds.push(this.prods[5]);
			if ( under.indexOf(7) != -1 )
				if ( this.dailyProds.indexOf(this.prods[42]) == -1 ) this.dailyProds.push(this.prods[42]);
		}
		else if ( look.indexOf(6) != -1 ) {
			if ( under.indexOf(1) != -1 )
				if ( this.dailyProds.indexOf(this.prods[9]) == -1 ) this.dailyProds.push(this.prods[9]);
			if ( under.indexOf(2) != -1 )
				if ( this.dailyProds.indexOf(this.prods[8]) == -1 ) this.dailyProds.push(this.prods[8]);
			if ( under.indexOf(3) != -1 )
				if ( this.dailyProds.indexOf(this.prods[37]) == -1 ) this.dailyProds.push(this.prods[37]);
			if ( under.indexOf(4) != -1 )
				if ( this.dailyProds.indexOf(this.prods[6]) == -1 ) this.dailyProds.push(this.prods[6]);
			if ( under.indexOf(5) != -1 )
				if ( this.dailyProds.indexOf(this.prods[19]) == -1 ) this.dailyProds.push(this.prods[19]);
			if ( under.indexOf(6) != -1 )
				if ( this.dailyProds.indexOf(this.prods[41]) == -1 ) this.dailyProds.push(this.prods[41]);
			if ( under.indexOf(7) != -1 )
				if ( this.dailyProds.indexOf(this.prods[41]) == -1 ) this.dailyProds.push(this.prods[41]);
		}
		else if ( look.indexOf(7) != -1 ) {
			if ( under.indexOf(1) != -1 )
				if ( this.dailyProds.indexOf(this.prods[0]) == -1 ) this.dailyProds.push(this.prods[0]);
			if ( under.indexOf(2) != -1 )
				if ( this.dailyProds.indexOf(this.prods[6]) == -1 ) this.dailyProds.push(this.prods[6]);
			if ( under.indexOf(3) != -1 )
				if ( this.dailyProds.indexOf(this.prods[37]) == -1 ) this.dailyProds.push(this.prods[37]);
			if ( under.indexOf(4) != -1 )
				if ( this.dailyProds.indexOf(this.prods[2]) == -1 ) this.dailyProds.push(this.prods[2]);
			if ( under.indexOf(5) != -1 )
				if ( this.dailyProds.indexOf(this.prods[43]) == -1 ) this.dailyProds.push(this.prods[43]);
			if ( under.indexOf(6) != -1 )
				if ( this.dailyProds.indexOf(this.prods[11]) == -1 ) this.dailyProds.push(this.prods[11]);
			if ( under.indexOf(7) != -1 )
				if ( this.dailyProds.indexOf(this.prods[44]) == -1 ) this.dailyProds.push(this.prods[44]);
		}
	}

	recommendFriday(look: number[], under: number[]) {
		this.fridayProds = [];

		if ( look.indexOf(1) != -1 ) {
			if ( under.indexOf(1) != -1 ) this.fridayProds.push(this.prods[6]);
			if ( under.indexOf(2) != -1 ) this.fridayProds.push(this.prods[12]);
			if ( under.indexOf(3) != -1 ) this.fridayProds.push(this.prods[45]);
			if ( under.indexOf(4) != -1 ) this.fridayProds.push(this.prods[46]);
			if ( under.indexOf(5) != -1 ) this.fridayProds.push(this.prods[16]);
			if ( under.indexOf(6) != -1 ) this.fridayProds.push(this.prods[14]);
			if ( under.indexOf(7) != -1 ) this.fridayProds.push(this.prods[13]);
		}
		else if ( look.indexOf(2) != -1 ) {
			if ( under.indexOf(1) != -1 )
				if ( this.fridayProds.indexOf(this.prods[8]) == -1 ) this.fridayProds.push(this.prods[8]);
			if ( under.indexOf(2) != -1 )
				if ( this.fridayProds.indexOf(this.prods[47]) == -1 ) this.fridayProds.push(this.prods[47]);
			if ( under.indexOf(3) != -1 )
				if ( this.fridayProds.indexOf(this.prods[48]) == -1 ) this.fridayProds.push(this.prods[48]);
			if ( under.indexOf(4) != -1 )
				if ( this.fridayProds.indexOf(this.prods[27]) == -1 ) this.fridayProds.push(this.prods[27]);
			if ( under.indexOf(5) != -1 )
				if ( this.fridayProds.indexOf(this.prods[49]) == -1 ) this.fridayProds.push(this.prods[49]);
			if ( under.indexOf(6) != -1 )
				if ( this.fridayProds.indexOf(this.prods[41]) == -1 ) this.fridayProds.push(this.prods[41]);
			if ( under.indexOf(7) != -1 )
				if ( this.fridayProds.indexOf(this.prods[39]) == -1 ) this.fridayProds.push(this.prods[39]);
		}
		else if ( look.indexOf(3) != -1 ) {
			if ( under.indexOf(1) != -1 )
				if ( this.fridayProds.indexOf(this.prods[28]) == -1 ) this.fridayProds.push(this.prods[28]);
			if ( under.indexOf(2) != -1 )
				if ( this.fridayProds.indexOf(this.prods[50]) == -1 ) this.fridayProds.push(this.prods[50]);
			if ( under.indexOf(3) != -1 )
				if ( this.fridayProds.indexOf(this.prods[51]) == -1 ) this.fridayProds.push(this.prods[51]);
			if ( under.indexOf(4) != -1 )
				if ( this.fridayProds.indexOf(this.prods[52]) == -1 ) this.fridayProds.push(this.prods[52]);
			if ( under.indexOf(5) != -1 )
				if ( this.fridayProds.indexOf(this.prods[53]) == -1 ) this.fridayProds.push(this.prods[53]);
			if ( under.indexOf(6) != -1 )
				if ( this.fridayProds.indexOf(this.prods[26]) == -1 ) this.fridayProds.push(this.prods[26]);
			if ( under.indexOf(7) != -1 )
				if ( this.fridayProds.indexOf(this.prods[54]) == -1 ) this.fridayProds.push(this.prods[54]);
		}
		else if ( look.indexOf(4) != -1 ) {
			if ( under.indexOf(1) != -1 )
				if ( this.fridayProds.indexOf(this.prods[41]) == -1 ) this.fridayProds.push(this.prods[41]);
			if ( under.indexOf(2) != -1 )
				if ( this.fridayProds.indexOf(this.prods[55]) == -1 ) this.fridayProds.push(this.prods[55]);
			if ( under.indexOf(3) != -1 )
				if ( this.fridayProds.indexOf(this.prods[56]) == -1 ) this.fridayProds.push(this.prods[56]);
			if ( under.indexOf(4) != -1 )
				if ( this.fridayProds.indexOf(this.prods[57]) == -1 ) this.fridayProds.push(this.prods[57]);
			if ( under.indexOf(5) != -1 )
				if ( this.fridayProds.indexOf(this.prods[58]) == -1 ) this.fridayProds.push(this.prods[58]);
			if ( under.indexOf(6) != -1 )
				if ( this.fridayProds.indexOf(this.prods[17]) == -1 ) this.fridayProds.push(this.prods[17]);
			if ( under.indexOf(7) != -1 )
				if ( this.fridayProds.indexOf(this.prods[18]) == -1 ) this.fridayProds.push(this.prods[18]);
		}
		else if ( look.indexOf(5) != -1 ) {
			if ( under.indexOf(1) != -1 )
				if ( this.fridayProds.indexOf(this.prods[36]) == -1 ) this.fridayProds.push(this.prods[36]);
			if ( under.indexOf(2) != -1 )
				if ( this.fridayProds.indexOf(this.prods[29]) == -1 ) this.fridayProds.push(this.prods[29]);
			if ( under.indexOf(3) != -1 )
				if ( this.fridayProds.indexOf(this.prods[59]) == -1 ) this.fridayProds.push(this.prods[59]);
			if ( under.indexOf(4) != -1 )
				if ( this.fridayProds.indexOf(this.prods[60]) == -1 ) this.fridayProds.push(this.prods[60]);
			if ( under.indexOf(5) != -1 )
				if ( this.fridayProds.indexOf(this.prods[53]) == -1 ) this.fridayProds.push(this.prods[53]);
			if ( under.indexOf(6) != -1 )
				if ( this.fridayProds.indexOf(this.prods[26]) == -1 ) this.fridayProds.push(this.prods[26]);
			if ( under.indexOf(7) != -1 )
				if ( this.fridayProds.indexOf(this.prods[61]) == -1 ) this.fridayProds.push(this.prods[61]);
		}
		else if ( look.indexOf(6) != -1 ) {
			if ( under.indexOf(1) != -1 )
				if ( this.fridayProds.indexOf(this.prods[22]) == -1 ) this.fridayProds.push(this.prods[22]);
			if ( under.indexOf(2) != -1 )
				if ( this.fridayProds.indexOf(this.prods[62]) == -1 ) this.fridayProds.push(this.prods[62]);
			if ( under.indexOf(3) != -1 )
				if ( this.fridayProds.indexOf(this.prods[25]) == -1 ) this.fridayProds.push(this.prods[25]);
			if ( under.indexOf(4) != -1 )
				if ( this.fridayProds.indexOf(this.prods[63]) == -1 ) this.fridayProds.push(this.prods[63]);
			if ( under.indexOf(5) != -1 )
				if ( this.fridayProds.indexOf(this.prods[43]) == -1 ) this.fridayProds.push(this.prods[43]);
			if ( under.indexOf(6) != -1 )
				if ( this.fridayProds.indexOf(this.prods[41]) == -1 ) this.fridayProds.push(this.prods[41]);
			if ( under.indexOf(7) != -1 )
				if ( this.fridayProds.indexOf(this.prods[64]) == -1 ) this.fridayProds.push(this.prods[64]);
		}
	}

	recommendWeekend(look: number[], under: number[]) {
		this.weekendProds = [];

		if ( look.indexOf(1) != -1 ) {
			if ( under.indexOf(1) != -1 ) this.weekendProds.push(this.prods[3]);
			if ( under.indexOf(2) != -1 ) this.weekendProds.push(this.prods[4]);
			if ( under.indexOf(3) != -1 ) this.weekendProds.push(this.prods[65]);
			if ( under.indexOf(4) != -1 ) this.weekendProds.push(this.prods[35]);
			if ( under.indexOf(5) != -1 ) this.weekendProds.push(this.prods[29]);
			if ( under.indexOf(6) != -1 ) this.weekendProds.push(this.prods[18]);
			if ( under.indexOf(7) != -1 ) this.weekendProds.push(this.prods[66]);
		}
		else if ( look.indexOf(2) != -1 ) {
			if ( under.indexOf(1) != -1 )
				if ( this.weekendProds.indexOf(this.prods[1]) == -1 ) this.weekendProds.push(this.prods[1]);
			if ( under.indexOf(2) != -1 )
				if ( this.weekendProds.indexOf(this.prods[2]) == -1 ) this.weekendProds.push(this.prods[2]);
			if ( under.indexOf(3) != -1 )
				if ( this.weekendProds.indexOf(this.prods[67]) == -1 ) this.weekendProds.push(this.prods[67]);
			if ( under.indexOf(4) != -1 )
				if ( this.weekendProds.indexOf(this.prods[30]) == -1 ) this.weekendProds.push(this.prods[30]);
			if ( under.indexOf(5) != -1 )
				if ( this.weekendProds.indexOf(this.prods[32]) == -1 ) this.weekendProds.push(this.prods[32]);
			if ( under.indexOf(6) != -1 )
				if ( this.weekendProds.indexOf(this.prods[24]) == -1 ) this.weekendProds.push(this.prods[24]);
			if ( under.indexOf(7) != -1 )
				if ( this.weekendProds.indexOf(this.prods[31]) == -1 ) this.weekendProds.push(this.prods[31]);
		}
		else if ( look.indexOf(3) != -1 ) {
			if ( under.indexOf(1) != -1 )
				if ( this.weekendProds.indexOf(this.prods[9]) == -1 ) this.weekendProds.push(this.prods[9]);
			if ( under.indexOf(2) != -1 )
				if ( this.weekendProds.indexOf(this.prods[8]) == -1 ) this.weekendProds.push(this.prods[8]);
			if ( under.indexOf(3) != -1 )
				if ( this.weekendProds.indexOf(this.prods[51]) == -1 ) this.weekendProds.push(this.prods[51]);
			if ( under.indexOf(4) != -1 )
				if ( this.weekendProds.indexOf(this.prods[32]) == -1 ) this.weekendProds.push(this.prods[32]);
			if ( under.indexOf(5) != -1 )
				if ( this.weekendProds.indexOf(this.prods[35]) == -1 ) this.weekendProds.push(this.prods[35]);
			if ( under.indexOf(6) != -1 )
				if ( this.weekendProds.indexOf(this.prods[55]) == -1 ) this.weekendProds.push(this.prods[55]);
			if ( under.indexOf(7) != -1 )
				if ( this.weekendProds.indexOf(this.prods[40]) == -1 ) this.weekendProds.push(this.prods[40]);
		}
		else if ( look.indexOf(4) != -1 ) {
			if ( under.indexOf(1) != -1 )
				if ( this.weekendProds.indexOf(this.prods[7]) == -1 ) this.weekendProds.push(this.prods[7]);
			if ( under.indexOf(2) != -1 )
				if ( this.weekendProds.indexOf(this.prods[6]) == -1 ) this.weekendProds.push(this.prods[6]);
			if ( under.indexOf(3) != -1 )
				if ( this.weekendProds.indexOf(this.prods[17]) == -1 ) this.weekendProds.push(this.prods[17]);
			if ( under.indexOf(4) != -1 )
				if ( this.weekendProds.indexOf(this.prods[31]) == -1 ) this.weekendProds.push(this.prods[31]);
			if ( under.indexOf(5) != -1 )
				if ( this.weekendProds.indexOf(this.prods[15]) == -1 ) this.weekendProds.push(this.prods[15]);
			if ( under.indexOf(6) != -1 )
				if ( this.weekendProds.indexOf(this.prods[14]) == -1 ) this.weekendProds.push(this.prods[14]);
			if ( under.indexOf(7) != -1 )
				if ( this.weekendProds.indexOf(this.prods[11]) == -1 ) this.weekendProds.push(this.prods[11]);
		}
		else if ( look.indexOf(5) != -1 ) {
			if ( under.indexOf(1) != -1 )
				if ( this.weekendProds.indexOf(this.prods[0]) == -1 ) this.weekendProds.push(this.prods[0]);
			if ( under.indexOf(2) != -1 )
				if ( this.weekendProds.indexOf(this.prods[0]) == -1 ) this.weekendProds.push(this.prods[0]);
			if ( under.indexOf(3) != -1 )
				if ( this.weekendProds.indexOf(this.prods[21]) == -1 ) this.weekendProds.push(this.prods[21]);
			if ( under.indexOf(4) != -1 )
				if ( this.weekendProds.indexOf(this.prods[51]) == -1 ) this.weekendProds.push(this.prods[51]);
			if ( under.indexOf(5) != -1 )
				if ( this.weekendProds.indexOf(this.prods[30]) == -1 ) this.weekendProds.push(this.prods[30]);
			if ( under.indexOf(6) != -1 )
				if ( this.weekendProds.indexOf(this.prods[27]) == -1 ) this.weekendProds.push(this.prods[27]);
			if ( under.indexOf(7) != -1 )
				if ( this.weekendProds.indexOf(this.prods[16]) == -1 ) this.weekendProds.push(this.prods[16]);
		}
		else if ( look.indexOf(6) != -1 ) {
			if ( under.indexOf(1) != -1 )
				if ( this.weekendProds.indexOf(this.prods[0]) == -1 ) this.weekendProds.push(this.prods[0]);
			if ( under.indexOf(2) != -1 )
				if ( this.weekendProds.indexOf(this.prods[6]) == -1 ) this.weekendProds.push(this.prods[6]);
			if ( under.indexOf(3) != -1 )
				if ( this.weekendProds.indexOf(this.prods[19]) == -1 ) this.weekendProds.push(this.prods[19]);
			if ( under.indexOf(4) != -1 )
				if ( this.weekendProds.indexOf(this.prods[68]) == -1 ) this.weekendProds.push(this.prods[68]);
			if ( under.indexOf(5) != -1 )
				if ( this.weekendProds.indexOf(this.prods[69]) == -1 ) this.weekendProds.push(this.prods[69]);
			if ( under.indexOf(6) != -1 )
				if ( this.weekendProds.indexOf(this.prods[65]) == -1 ) this.weekendProds.push(this.prods[65]);
			if ( under.indexOf(7) != -1 )
				if ( this.weekendProds.indexOf(this.prods[32]) == -1 ) this.weekendProds.push(this.prods[32]);
		}
		else if ( look.indexOf(7) != -1 ) {
			if ( under.indexOf(1) != -1 )
				if ( this.weekendProds.indexOf(this.prods[7]) == -1 ) this.weekendProds.push(this.prods[7]);
			if ( under.indexOf(2) != -1 )
				if ( this.weekendProds.indexOf(this.prods[6]) == -1 ) this.weekendProds.push(this.prods[6]);
			if ( under.indexOf(3) != -1 )
				if ( this.weekendProds.indexOf(this.prods[38]) == -1 ) this.weekendProds.push(this.prods[38]);
			if ( under.indexOf(4) != -1 )
				if ( this.weekendProds.indexOf(this.prods[67]) == -1 ) this.weekendProds.push(this.prods[67]);
			if ( under.indexOf(5) != -1 )
				if ( this.weekendProds.indexOf(this.prods[70]) == -1 ) this.weekendProds.push(this.prods[70]);
			if ( under.indexOf(6) != -1 )
				if ( this.weekendProds.indexOf(this.prods[28]) == -1 ) this.weekendProds.push(this.prods[28]);
			if ( under.indexOf(7) != -1 )
				if ( this.weekendProds.indexOf(this.prods[24]) == -1 ) this.weekendProds.push(this.prods[24]);
		}
	}

	clear() {
		this.globals.exp = 0;

		this.globals.vBand = 0;
		this.globals.vCup = '';
		this.globals.vPant = '';

		this.globals.brafit = 0;
		this.globals.bandfit = 0;
		this.globals.shoulderfit = 0;

		this.globals.vProsN = [];
		this.globals.vProsT = '';

		this.globals.vConsN = [];
		this.globals.vConsT = '';

		this.globals.dailyL = [];
		this.globals.dailyU = [];

		this.globals.fridayL = [];
		this.globals.fridayU = [];

		this.globals.weekendL = [];
		this.globals.weekendU = [];

		this.globals.preferC = [];
		this.globals.presentC = [];

		this.globals.pPad = -1;

		this.globals.way = '';
		this.globals.wayIn = '';

		this.globals.uAge = 0;
		this.globals.uCity = '';
		this.globals.uEmail = '';
	}
}
