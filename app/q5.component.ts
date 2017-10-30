import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'q5',
	templateUrl: 'q5.component.html',
	styles: [`
	`]
})

export class Q5Component {
	constructor(
		private router: Router
	) {}

	public shoulderfits = [
		{ value: 1, display: '잘 맞는다.', checked: false, tip: 'Excellent! 아주 좋습니다~!!' },
		{ value: 2, display: '타이트하다.', checked: false, tip: '어깨끈을 너무 조여서 착용하신건 아니신지~? \n살짝 늘려서 착용해보셔도 여전히 어깨끈이 타이트 하시다면, 둘레사이즈가 작아서 일수 있으니 브라의 둘레를 한사이즈 크게 선택해 보시는 것을 추천드립니다.' },
		{ value: 3, display: '흘러내린다.', checked: false, tip: '어깨끈에도 수명이 있다는 것을 알고 계셨나요? \n만약 타이트하게 줄여입었는데도 계솔 흘러내린다면, 어깨끈을 교체해야할 때가 왔다는 신호입니다. 그래도 여전히 흘러내리신다면, 둘레사이즈가 큰 경우 일 수 있으니, 브라의 둘레를 한사이즈 작게 선택해보시는 것을 추천해드립니다.' }
	];

	goBack() {
		this.router.navigate(['/q4']);
	}
	
	goNext() {
		this.router.navigate(['/q6']);
	}

}
