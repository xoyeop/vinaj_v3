import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/primeng';

@Component({
  selector: 'my-app',
  template: `
		<header class="header">
			<h1>VINAJ STYLE QUIZ</h1>
		</header>
		<div class="contents" style="text-align: center;">
			<router-outlet></router-outlet>
		</div>
		<footer class="footer">
			<span class="powered-by">
				Powered by POLARIS&CO.
			</span>
		</footer>
	`,
  styles: [`
  `]
})

export class AppComponent  {
	constructor(
		private router: Router
	){}
}
