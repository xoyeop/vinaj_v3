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

	display: boolean = false;

	goBack() {
		this.router.navigate(['/start']);
	}
	
	goNext() {
		if ( this.selectedEntry == null )
			this.display = true;
		else {
			this.globals.exp = this.selectedEntry.value;

			if (this.globals.exp == 1)
				this.router.navigate(['/q2']);
			else
				this.router.navigate(['/q8']);
		}
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
