import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './start.component';
import { Q1Component } from './q1.component';
import { Q2Component } from './q2.component';
import { Q3Component } from './q3.component';
import { Q4Component } from './q4.component';
import { Q5Component } from './q5.component';
import { Q6Component } from './q6.component';
import { Q7Component } from './q7.component';
import { Q8Component } from './q8.component';
import { Q9Component } from './q9.component';
import { Q10Component } from './q10.component';
import { Q11Component } from './q11.component';
import { Q12Component } from './q12.component';
import { Q13Component } from './q13.component';
import { Q14Component } from './q14.component';
import { Q15Component } from './q15.component';

const routes: Routes = [
	{ path: '', redirectTo: '/start', pathMatch: 'full' },
	{ path: 'start', component: StartComponent },
	{ path: 'q1', 	 component: Q1Component },
	{ path: 'q2', 	 component: Q2Component },
	{ path: 'q3',		 component: Q3Component },
	{ path: 'q4', 	 component: Q4Component },
	{ path: 'q5', 	 component: Q5Component },
	{ path: 'q6', 	 component: Q6Component },
	{ path: 'q7', 	 component: Q7Component },
	{ path: 'q8', 	 component: Q8Component },
	{ path: 'q9', 	 component: Q9Component },
	{ path: 'q10', 	 component: Q10Component },
	{ path: 'q11', 	 component: Q11Component },
	{ path: 'q12', 	 component: Q12Component },
	{ path: 'q13', 	 component: Q13Component },
	{ path: 'q14', 	 component: Q14Component },
	{ path: 'q15', 	 component: Q15Component },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}
