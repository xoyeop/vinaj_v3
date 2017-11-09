import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './globals';

import { ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'q8',
	templateUrl: 'q8.component.html',
	styles: [`
		.ui-tabview-panel {
			overflow: scroll;
		}
	`]
})

export class Q8Component {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	public looks = this.globals.q8_looks;
	public unders = this.globals.q8_unders;

	selectedEntry: { [key: string]: any };

	display_look: boolean = false;
	display_under: boolean = false;
	display_lu: boolean = false;

	goBack() {
		if ( this.globals.exp == 1 )
			this.router.navigate(['/q7']);
		else ( this.globals.exp == 2 )
			this.router.navigate(['/q1']);
	}

	goNext() {
		if ( this.selectedLooks.length == 0 && this.selectedUnders.length == 0 )
			this.display_lu = true;
		else if ( this.selectedLooks.length == 0 )
			this.display_look = true;
		else if ( this.selectedUnders.length == 0 )
			this.display_under = true;
		else {
			this.globals.dailyL = [];
			this.globals.dailyL = this.selectedLooks;

			this.globals.dailyU = [];
			this.globals.dailyU = this.selectedUnders;

			this.router.navigate(['/q9']);
		}	
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
