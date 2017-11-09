import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './globals';

import { ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'q14',
	templateUrl: 'q14.component.html',
	styles: [`
	`]
})

export class Q14Component {
	constructor(
		private router: Router,
		private globals: Globals
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
		this.globals.way = null;
		this.globals.way = this.selectedWay;

		this.globals.wayIn = null;
		if ( this.selectedWay == "nsearch" ) 
			this.globals.wayIn = this.nSearchKeyword;
		else if ( this.selectedWay == "nblog" )
			this.globals.wayIn = this.nBlogId;
		else if ( this.selectedWay == "insta" )
			this.globals.wayIn = this.instaId;
		else if ( this.selectedWay == "etc" )
			this.globals.wayIn = this.etcCont;

		this.router.navigate(['/q15']);
	}
}
