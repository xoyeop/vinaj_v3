import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'q14',
	templateUrl: 'q14.component.html',
	styles: [`
	`]
})

export class Q14Component {
	constructor(
		private router: Router
	) {}

	public ways = [
     { value: 'nsearch', display: '네이버 키워드 검색', checked: false },
     { value: 'nblog', display: '네이버 블로그', checked: false },
     { value: 'insta', display: '인스타그램의 일반인 착용샷', checked: false },
     { value: 'vinsta', display: '비나제이 인스타그램', checked: false },
     { value: 'vfb', display: '비나제이 페이스북', checked: false },
     { value: 'friend', display: '지인소개', checked: false },
     { value: 'etc', display: '기타', checked: false },
   ];

   selectedWay: string = "nsearch";

   nSearchKeyword: string = null;
   nBlogId: string = null;
   instaId: string = null;


	goBack() {
		this.router.navigate(['/q13']);
	}

	goNext() {
		this.router.navigate(['/q15']);
	}


}
