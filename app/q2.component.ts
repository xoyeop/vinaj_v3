import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './globals';

import { ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'q2',
	templateUrl: 'q2.component.html',
	styles: [`
	`]
})

export class Q2Component {
	bands: SelectItem[] = [];
	cups: SelectItem[] = [];
	pants: SelectItem[] = [];

	selectedBand: number = 65;
	selectedCup: string = 'A';
	selectedPant: string = 'm';

	constructor(
		private router: Router,
		private globals: Globals
	) {
		this.bands = [];
		this.bands.push({ label: '65', value: 65 });
		this.bands.push({ label: '70', value: 70 });
		this.bands.push({ label: '75', value: 75 });
		this.bands.push({ label: '80', value: 80 });
		this.bands.push({ label: '85', value: 85 });
		this.bands.push({ label: '90', value: 90 });

		this.cups = [];
		this.cups.push({label: 'A', value: 'A'});
		this.cups.push({label: 'B', value: 'B'});
		this.cups.push({label: 'C', value: 'C'});
		this.cups.push({label: 'D', value: 'D'});
		this.cups.push({label: 'E', value: 'E'});
		this.cups.push({label: 'F', value: 'F'});

		this.pants = [];
		this.pants.push({label: 'X-Small', value: 'xs'});
		this.pants.push({label: 'Small', value: 's'});
		this.pants.push({label: 'Medium', value: 'm'});
		this.pants.push({label: 'Large', value: 'l'});
		this.pants.push({label: 'X-Large', value: 'xl'});
	}

	goBack() {
		this.router.navigate(['/q1']);
	}

	goNext() {
		this.globals.vBand = this.selectedBand;
		this.globals.vCup = this.selectedCup;
		this.globals.vPant = this.selectedPant;
	
		this.router.navigate(['/q3']);
	}

}
