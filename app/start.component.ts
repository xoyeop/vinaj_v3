import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'start',
	templateUrl: 'start.component.html',
	styles: [`
	`]
})

export class StartComponent {
	constructor(
		private router: Router
	) {}
	
	goNext() {
		this.router.navigate(['/q1']);
	}

}
