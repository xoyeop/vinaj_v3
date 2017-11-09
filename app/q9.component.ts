import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './globals';

import { ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'q9',
	templateUrl: 'q9.component.html',
	styles: [`
	`]
})

export class Q9Component{
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	public looks = this.globals.q9_looks;
	public unders = this.globals.q9_unders;

	selectedEntry: { [key: string]: any };

	display_lu: boolean = false;
	display_look: boolean = false;
	display_under: boolean = false;

	goBack() {
		this.router.navigate(['/q8']);
	}

	goNext() {
		if ( this.selectedLooks.length == 0 && this.selectedUnders.length == 0 )
			this.display_lu = true;
		else if ( this.selectedLooks.length == 0 )
			this.display_look = true;
		else if ( this.selectedUnders.length == 0 )
			this.display_under = true;
		else {
			this.globals.fridayL = [];
			this.globals.fridayL = this.selectedLooks;

			this.globals.fridayU = [];
			this.globals.fridayU = this.selectedUnders;

			this.router.navigate(['/q10']);
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
