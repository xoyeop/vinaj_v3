import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './globals';

import { ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'q3',
	templateUrl: 'q3.component.html',
	styles: [`
		@media only screen and (min-width: 768px) {
			li.span3 {
				width: 20%;
			}
		}
	`]
})

export class Q3Component {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	public brafits = [
		{ value: 1, display: '잘 맞는다.', checked: false },
		{ value: 2, display: '컵 위로 가슴이 비어져 나온다.', checked: false, tip: '컵 사이즈가 작아서 가슴이 눌리고 컵밖으로 나와 살을 파고드는 것입니다. 컵 사이즈를 한치수 크게 선택하시는 것을 권장해드립니다.' },
		{ value: 3, display: '옆구리 살이 비어져 나온다.', checked: false, tip: '컵사이즈가 작아서 가슴을 전부 감싸고 있지 않아서 혹은 둘레사이즈가 작기 때문입니다. 착용시 사이드 살을 끌어올려 컵에 넣습니다. 이렇게 해도 사이드 살이 비어져 나올 시, 컵사이즈나 둘레 사이즈를 한 치수 크게 선택하시는 것을 권장해드립니다.' },
		{ value: 4, display: '캡 위쪽이 빈다.', checked: false, tip: '컵사이즈 혹은 둘레사이즈가 커서 컵이 뜨기 때문입니다. 보통 컵사이가 커서 컵 위쪽이 비는 것이지만 컵사이즈가 잘 맞아도 둘레가 느슨하면 컵이 뜨거나 헐거울 수 있습니다. 컵 사이즈 혹은 둘레 사이즈를 좀 더 작은 사이즈로 선택하시는 것을 권장해드립니다.' },
		{ value: 5, display: '캡 중간이 빈다.', checked: false, tip: '브라의 언더부분과 컵의 용접 및 와이어가 맞지 않아서 (컵 사이즈가 커서) 가슴이 컵안에서 안정되게 자리잡지 못했기 때문입니다. 컵사이즈를 좀더 작은 사이즈로 선택하시는 것을 권장해드립니다.' }
	];

	selectedEntry: { [key: string]: any };

	display: boolean = false;

	goBack() {
		this.router.navigate(['/q2']);
	}
	
	goNext() {
		if ( this.selectedEntry == null )
			this.display = true;
		else {
			this.globals.brafit = this.selectedEntry.value;

			this.router.navigate(['/q4']);
		}
	}

	onSelectionChange(entry) {
		this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
	}		

	get selectedOptions() {
		return this.brafits
			.filter(opt => opt.checked)
			.map(opt => opt.value);
	}
	
}
