import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './globals';

import { ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'q10',
	templateUrl: 'q10.component.html',
	styles: [`
	`]
})

export class Q10Component {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	public looks = this.globals.q10_looks;
	public unders = this.globals.q10_unders;

	selectedEntry: { [key: string]: any };

	goBack() {
		this.router.navigate(['/q9']);
	}

	goNext() {
		this.router.navigate(['/q11']);
	}

	onSelectionChange(entry) {
	 this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
	}

	get selectedLooks() {
		return this.looks
			.filter(opt => opt.checked)
			.map(opt => opt.value);
	}

	get selectedUnders() {
		return this.unders
			.filter(opt => opt.checked)
			.map(opt => opt.value);
	}
}
