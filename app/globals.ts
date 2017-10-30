import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
	tpo: number;		// Q1 - TPO (1~9)
	concept: number;	// Q1 - Concept (1~9)

	exp: number;		// Q2 - Experience about buying VINAJ (1, 2)

	vName: string;		// Q2 - VINAJ Product Name
	vBand: number;		// Q2 - VINAJ Product Band Size
	vCup: string;		// Q2 - VINAJ Product Cup Size
	vPad: number;		// Q2 - VINAJ Product Pad Size (0, 0.4, 1.5, 3)

	oBrand: string;		// Q2, Q7 - OTHER Brand Name
	oBand: number;		// Q2, Q7 - OTHER Brand Band Size
	oCup: string;		// Q2, Q7 - OTHER Brand Cup Size
	oPad: number; 		// Q2 - OTHER Brand Pad Size (0, 0.4, 1.5, 3)

	brafit: number;		// Q3 - Bra Fitting Status (1~5)

	bandfit: number; 	// Q4 - Band Fitting Status (1~3)

	shoulderfit: number;	// Q5 - Shoulder Fitting Status (1~3)

	bustfit: number; 	// Q6 - Bust Fitting Status (1~3)

	oGood: string;		// Q7 - Good things about other brand

	vsBand: number;		// Q8 - Other Brand vs. VINAJ - Band Size (-2 ~ 2)
	vsCup: number;		// Q8 - Other Brand vs. VINAJ - Cup Size (-2 ~ 2)

	pPad: number;		// Q9 - Preferred Pad Size (0, 0.4, 1.5, 3)

	pBra: number[];		// Q10 - Preferred Bras (1~7)

	pColor: number[];	// Q11 - Preferred Colors (1~6)

	pDetail: number[];	// Q12 - Preferred Details (1~8)

	way: string;		// Q13 - Way to know VINAJ
	wayIn: string;		// Q13 - Detailed way - ID, Search query, etc

	uAge: number;		// Q14 - User Info - Age
	uCity: string;		// Q14 - User Info - City
	uID: string;		// Q14 - User Info - VINAJ ID
	uEmail: string;		// Q14 - User Info - Email Address

	/**
	 * VINAJ_v3
	 * - 모든 데이터 바인딩 여기서
	 **/

	// Q1
	exps: string[] = [
		{ value: 1, display: '예', checked: false },	
		{ value: 2, display: '아니오', checked: false },	
	];

	// Q6
	proses: string[] = [
		{ value: 1, display: '예쁜 디자인', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 2, display: '특이한 디자인', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 3, display: '고급스러운 디자인', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 4, display: '섹시하다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 5, display: '수영복 겸용으로 브라 사용이 가능하다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 6, display: '다양한 어깨끈을 추가 구매할 수 있다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 7, display: '어깨끈을 악세서리처럼 포인트 줄 수 있다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 8, display: 'SNS에서 유명하다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 9, display: '생각보다 편하다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 10, display: '백스트랩으로 둘레 사이즈 조절이 가능하다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 11, display: '품질이 좋다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 12, display: '브랜드 이미지가 좋다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
	];

	// Q7
	conses: string[] = [
		{ value: 1, display: '가격이 비싸다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 2, display: '가격 대비 마감이 아쉽다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 3, display: '금속알러지가 생긴다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 4, display: '야하다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 5, display: '비키니로 입기엔 너무 속옷 같다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 6, display: '수영복 겸용 소재라 두꺼워서 속옷으론 답답하다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 7, display: '어깨끈 길이가 체형별로 달라져야 할 것 같다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 8, display: '타브랜드에 비해 컵이 작다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 9, display: '타브랜드에 비해 모아주는 기능이 아쉽다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
		{ value: 10, display: '입고 벗기가 불편하고 번거롭다', checked: false, tip: '감사합니다! 고객님의 의견을 반영하여 더 좋은 제품 만들도록 노력하겠습니다.' },
	];

	// Q8
	q8_looks: string[] = [
		{ value: 1, display: '스마트한 컬리지룩', checked: false },
		{ value: 2, display: '어반시크', checked: false },
		{ value: 3, display: '포멀한 오피스룩', checked: false },
		{ value: 4, display: '영캐쥬얼', checked: false },
		{ value: 5, display: '심플베이직', checked: false },
		{ value: 6, display: '우아한 원피스룩', checked: false },
		{ value: 7, display: '경쾌한 데님패션', checked: false },
	];

	q8_unders: string[] = [
		{ value: 1, display: '베이직한 디자인의 블랙브라', checked: false },
		{ value: 2, display: '베이직한 디자인의 스킨브라', checked: false },
		{ value: 3, display: '힘껏 모아주는 블랙 코르셋브라', checked: false },
		{ value: 4, display: '힘껏 모아주는 스킨 코르셋브라', checked: false },
		{ value: 5, display: '살짝 포인트를 주는 스트랩브라', checked: false },
		{ value: 6, display: '청순미를 어필하는 레이스브라', checked: false },
		{ value: 7, display: '우아한 디자인의 스킨 레이스브라', checked: false },
	];

	// Q10
	q10_looks: string[] = [
		{ value: 1, display: '어반시크', checked: false },
		{ value: 2, display: '편안한 트레이닝룩', checked: false },
		{ value: 3, display: '시크 올블랙 트레이닝룩', checked: false },
		{ value: 4, display: '깜찍발랄 여친룩', checked: false },
		{ value: 5, display: '락시크', checked: false },
		{ value: 6, display: '보이쉬룩', checked: false },
		{ value: 7, display: '스마트한 캐쥬얼룩', checked: false },
	];

	q10_unders: string[] = [
		{ value: 1, display: '베이직한 디자인의 블랙브라', checked: false },
		{ value: 2, display: '베이직한 디자인의 스킨브라', checked: false },
		{ value: 3, display: '경쾌한 패턴의 초모리 왕뽕브라', checked: false },
		{ value: 4, display: '캐쥬얼한 로고브라', checked: false },
		{ value: 5, display: '편안한 스포츠브라', checked: false },
		{ value: 6, display: '귀여운 초커브라', checked: false },
		{ value: 7, display: '파스텔톤 레이스브라', checked: false },
	];

	// Q9
	q9_looks: string[] = [
		{ value: 1, display: '페미닌 원피스룩', checked: false },
		{ value: 2, display: '어반시크', checked: false },
		{ value: 3, display: '크롭탑코디', checked: false },
		{ value: 4, display: '엘레강스 원피스룩', checked: false },
		{ value: 5, display: '페스티벌룩', checked: false },
		{ value: 6, display: '포멀 시스루룩', checked: false },
	];

	q9_unders: string[] = [
		{ value: 1, display: '베이직한 디자인의 스킨브라', checked: false },
		{ value: 2, display: '왕뽕  일체형 브라', checked: false },
		{ value: 3, display: '살짝 포인트를 주는 블랙초커브라', checked: false },
		{ value: 4, display: '살짝 도발적인 블랙스트랩브라', checked: false },
		{ value: 5, display: '매력적인 레드레이스브라', checked: false },
		{ value: 6, display: '청순미를 어필하는 화이트 레이스브라', checked: false },
		{ value: 7, display: '우아한 디자인의 블랙  레이스브라', checked: false },
	];

	// Q11 & Q12
	colors: string[] = [
		{ value: 1, display: '블랙', checked: false },
		{ value: 2, display: '스킨', checked: false },
		{ value: 3, display: '브라운', checked: false },
		{ value: 4, display: '그린', checked: false },
		{ value: 5, display: '블루', checked: false },
		{ value: 6, display: '레드', checked: false },
		{ value: 7, display: '옐로우', checked: false },
		{ value: 8, display: '메탈릭', checked: false },
		{ value: 9, display: '바이올렛', checked: false },
		{ value: 10, display: '오렌지', checked: false },
		{ value: 11, display: '핑크', checked: false },
		{ value: 12, display: '타쿠아즈', checked: false },
	];

	// Q13
	pads: string[] = [
		{ value: 1, display: '노패드', checked: false },
		{ value: 2, display: '0.4cm', checked: false },
		{ value: 3, display: '1.5cm', checked: false },
		{ value: 4, display: '3cm', checked: false },
	];
}
