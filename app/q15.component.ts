import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './globals';

import { SelectItem } from 'primeng/primeng';

@Component({
	selector: 'q15',
	templateUrl: 'q15.component.html',
	styles: [`
	`]
})

export class Q15Component {
	cities: SelectItem[];
	ages: SelectItem[];
	emails: SelectItem[];

	selectedCity: string = "SE";
	selectedAge: number = 25;
	selectedEmail: string = "이메일선택";
	emailID: string = null;

	constructor(
		private router: Router,,
		private globals: Globals
	) {
		this.cities = [];
   this.cities.push({ label: '서울', value: 'SE' });
   this.cities.push({ label: '부산', value: 'BS' });
   this.cities.push({ label: '인천', value: 'IC' });
   this.cities.push({ label: '대전', value: 'DJ' });
   this.cities.push({ label: '광주', value: 'GJ' });
   this.cities.push({ label: '대구', value: 'DG' });
   this.cities.push({ label: '울산', value: 'US' });
   this.cities.push({ label: '경기도', value: 'GG' });
   this.cities.push({ label: '충청북도', value: 'CB' });
   this.cities.push({ label: '충청남도', value: 'CN' });
   this.cities.push({ label: '전라북도', value: 'JB' });
   this.cities.push({ label: '전라남도', value: 'JN' });
   this.cities.push({ label: '강원도', value: 'GW' });
   this.cities.push({ label: '경상북도', value: 'GB' });
   this.cities.push({ label: '경상남도', value: 'GN' });
   this.cities.push({ label: '제주도', value: 'JJ' });

	 this.ages = [];
	 this.ages.push({ label: '15', value: 15 });
	 this.ages.push({ label: '16', value: 16 });
	 this.ages.push({ label: '17', value: 17 });
	 this.ages.push({ label: '18', value: 18 });
	 this.ages.push({ label: '19', value: 19 });
	 this.ages.push({ label: '20', value: 20 });
	 this.ages.push({ label: '21', value: 21 });
	 this.ages.push({ label: '22', value: 22 });
	 this.ages.push({ label: '23', value: 23 });
	 this.ages.push({ label: '24', value: 24 });
	 this.ages.push({ label: '25', value: 25 });
	 this.ages.push({ label: '26', value: 26 });
	 this.ages.push({ label: '27', value: 27 });
	 this.ages.push({ label: '28', value: 28 });
	 this.ages.push({ label: '29', value: 29 });
	 this.ages.push({ label: '30', value: 30 });
	 this.ages.push({ label: '31', value: 31 });
	 this.ages.push({ label: '32', value: 32 });
	 this.ages.push({ label: '33', value: 33 });
	 this.ages.push({ label: '34', value: 34 });
	 this.ages.push({ label: '35', value: 35 });
	 this.ages.push({ label: '36', value: 36 });
	 this.ages.push({ label: '37', value: 37 });
	 this.ages.push({ label: '38', value: 38 });
	 this.ages.push({ label: '39', value: 39 });
	 this.ages.push({ label: '40', value: 40 });
	 this.ages.push({ label: '41', value: 41 });
	 this.ages.push({ label: '42', value: 42 });
	 this.ages.push({ label: '43', value: 43 });
	 this.ages.push({ label: '44', value: 44 });
	 this.ages.push({ label: '45', value: 45 });
	 this.ages.push({ label: '46', value: 46 });
	 this.ages.push({ label: '47', value: 47 });
	 this.ages.push({ label: '48', value: 48 });
	 this.ages.push({ label: '49', value: 49 });
	 this.ages.push({ label: '50', value: 50 });
	 this.ages.push({ label: '51', value: 51 });
	 this.ages.push({ label: '52', value: 52 });
	 this.ages.push({ label: '53', value: 53 });
   this.ages.push({ label: '54', value: 54 });
   this.ages.push({ label: '55', value: 55 });
   this.ages.push({ label: '56', value: 56 });
   this.ages.push({ label: '57', value: 57 });
   this.ages.push({ label: '58', value: 58 });
   this.ages.push({ label: '59', value: 59 });
   this.ages.push({ label: '60', value: 60 });

	 this.emails = [];
	 this.emails.push({ label: 'naver.com', value: 'naver' });
	 this.emails.push({ label: 'gmail.com', value: 'gmail' });
	 this.emails.push({ label: 'nate.com', value: 'nate' });
	 this.emails.push({ label: 'hanmail.com', value: 'hanmail' });
	 this.emails.push({ label: 'daum.com', value: 'daum' });
	 this.emails.push({ label: 'hotmail.com', value: 'hotmail' });
	}



	goBack() {
		this.router.navigate(['/q14']);
	}

	goNext() {
		this.router.navigate(['/q15']);
	}

}
