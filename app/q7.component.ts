import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './globals';

import { ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'q7',
	templateUrl: 'q7.component.html',
	styles: [`
		.ui-inputtext {
			margin-left: 10px;
			height: 39px;
			border: 1px solid #5d5d5d;
			border-radius: 5px;
		}
	`]
})

export class Q7Component {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	public conses = this.globals.conses;
	public etc: string = "";

	selectedEntry: { [key: string]: any };

	display: boolean = false;

	goBack() {
		this.router.navigate(['/q6']);
	}

	goNext() {
		if ( this.selectedEntry == null && this.etc == "")
			this.display = true;
		else {
			this.globals.vConsN = [];
			this.globals.vConsN = this.selectedOptions;

			if ( this.etc != "" ) this.globals.vConsN.push(11);
			this.globals.vConsT = this.etc;

			this.router.navigate(['/q8']);
		}
	}

	onSelectionChange(entry) {
	 this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
	}

	get selectedOptions() {
		return this.conses
			.filter(opt => opt.checked)
			.map(opt => opt.value);
	}
}
