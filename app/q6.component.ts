import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './globals';

import { ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'q6',
	templateUrl: 'q6.component.html',
	styles: [`
		.ui-inputtext {
			margin-left: 10px;
			height: 39px;
			border: 1px solid #5d5d5d;
			border-radius: 5px;
		}
	`]
})

export class Q6Component {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	public proses = this.globals.proses;
	public etc: string = "";

	selectedEntry: { [key: string]: any };

	display: boolean = false;

	goBack() {
			this.router.navigate(['/q5']);
	}

	goNext() {
		if ( this.selectedEntry == null && this.etc == "")
			this.display = true;
		else {
			this.globals.vProsN = [];
			this.globals.vProsN = this.selectedOptions;

			if ( this.etc != "" ) this.globals.vProsN.push(13);
			this.globals.vProsT = this.etc;

			this.router.navigate(['/q7']);
		}
	}

	onSelectionChange(entry) {
	 this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
	}

	get selectedOptions() {
		return this.proses
			.filter(opt => opt.checked)
			.map(opt => opt.value);
	}
}
