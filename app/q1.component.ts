import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './globals';

import { ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'q1',
	templateUrl: 'q1.component.html',
	styles: [`
	`]
})

export class Q1Component {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	public exps = this.globals.exps;

	selectedEntry: { [key: string]: any };

	goBack() {
		this.router.navigate(['/start']);
	}
	
	goNext() {
		this.router.navigate(['/q2']);
	}

	onSelectionChange(entry) {
	 this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
	}

	get selectedOptions() {
		return this.exps
			.filter(opt => opt.checked)
			.map(opt => opt.value);
	}
}
