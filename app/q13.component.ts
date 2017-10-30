import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './globals';

import { ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'q13',
	templateUrl: 'q13.component.html',
	styles: [`
	`]
})

export class Q13Component {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	public pads = this.globals.pads;

	selectedEntry: { [key: string]: any };

	goBack() {
		this.router.navigate(['/q12']);
	}

	goNext() {
		this.router.navigate(['/q14']);
	}

	onSelectionChange(entry) {
	 this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
	}

	get selectedOptions() {
		return this.pads
			.filter(opt => opt.checked)
			.map(opt => opt.value);
	}
}
