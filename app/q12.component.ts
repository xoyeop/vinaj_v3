import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './globals';

import { ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'q12',
	templateUrl: 'q12.component.html',
	styles: [`
	`]
})

export class Q12Component {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	public colors = this.globals.colors;

	selectedEntry: { [key: string]: any };

	display: boolean = false;

	goBack() {
		this.router.navigate(['/q11']);
	}

	goNext() {
		if ( this.selectedColors.length == 0 )
			this.display = true;
		else {
			this.globals.presentC = [];
			this.globals.presentC = this.selectedColors;

			this.router.navigate(['/q13']);
		}
	}

	onSelectionChange(entry) {
	 this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
	}

	get selectedColors() {
		return this.colors
			.filter(opt => opt.checked)
			.map(opt => opt.value);
	}
}
