import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './globals';

import { ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'q4',
	templateUrl: 'q4.component.html',
	styles: [`
	`]
})

export class Q4Component {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	public bandfits = [
		{ value: 1, display: '잘 맞는다.', checked: false, tip: '어깨와 수평하게 놓이면서, 아주 살짝 타이트한 정도의 브라밴드가 가장 편안한 피팅상태라 볼 수 있습니다.' },
		{ value: 2, display: '너무 타이트해서 불편하다.', checked: false, tip: '둘레사이즈가 너무 작기 때문입니다. 둘레사이즈를 좀더 크게 선택하시는 것을 권장해드립니다.' },
		{ value: 3, display: '살짝 루즈해서 자꾸 올라간다.', checked: false, tip: '둘레사이즈가 크거나, 브라밴드의 수명이 다했기 때문입니다. 둘레사이즈를 좀더 작게 선택하시거나, 브라밴드를 타이트하게 수선하시는 것을 권장해드립니다.' }
	];

	selectedEntry: { [key: string]: any };

	display: boolean = false;

	goBack() {
		this.router.navigate(['/q3']);
	}
	
	goNext() {
		if ( this.selectedEntry == null )
			this.display = true;
		else {
			this.globals.bandfit = this.selectedEntry.value;

			this.router.navigate(['/q5']);
		}
	}

	onSelectionChange(entry) {
		this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
	}		

	get selectedOptions() {
		return this.bandfits
			.filter(opt => opt.checked)
			.map(opt => opt.value);
	}
	
}
