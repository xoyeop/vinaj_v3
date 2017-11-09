import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './globals';

import { ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'q11',
	templateUrl: 'q11.component.html',
	styles: [`
	`]
})

export class Q11Component {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	public colors = this.globals.colors;

	selectedEntry: { [key: string]: any };

	display: boolean = false;

	goBack() {
		this.router.navigate(['/q10']);
	}

	goNext() {
		if ( this.selectedColors.length == 0 )
			this.display = true;
		else {
			this.globals.preferC = [];
			this.globals.preferC = this.selectedColors;
				
			this.router.navigate(['/q12']);
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
