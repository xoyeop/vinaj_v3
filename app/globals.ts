import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
	exp: number;		// Q1 - Experience about buying VINAJ (1, 2)

	vBand: number;		// Q2 - VINAJ Product Band Size
	vCup: string;		// Q2 - VINAJ Product Cup Size
	vPant: string;	// Q2 - Pant size (xs, s, m, l, xl)

	brafit: number;		// Q3 - Bra Fitting Status (1~5)

	bandfit: number; 	// Q4 - Band Fitting Status (1~3)

	shoulderfit: number;	// Q5 - Shoulder Fitting Status (1~3)

	vProsN: number[];	// Q6 - Pros
	vProsT: string;		// Q6 - Pros ETC

	vConsN: number[]; // Q7 - Cons
	vConsT: string;		// Q7 - Cons ETC

	dailyL: number[];	// Q8 - Preferred Daily Look
	dailyU: number[];	// Q8 - Preferred Daily Underwear

	fridayL: number[];	// Q9 - Preferred Friday Look
	fridayU: number[];	// Q9 - Preferred Friday Underwear

	weekendL: number[];	// Q10 - Preferred Weekend Look
	weekendU: number[];	// Q10 - Preferred Weekend Underwear

	preferC: number[];	// Q11 - Preferred Color

	presentC: number[]; // Q12 - Preferred Color to present

	pPad: number;				// Q13 - Preferred Pad Size (0, 0.4, 1.5, 3)

	way: string;		// Q14 - Way to know VINAJ
	wayIn: string;		// Q14 - Detailed way - ID, Search query, etc

	uAge: number;		// Q15 - User Info - Age
	uCity: string;		// Q15 - User Info - City
	uEmail: string;		// Q15 - User Info - Email Address

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
		{ value: 7, display: '타쿠아즈', checked: false },
		{ value: 8, display: '핑크', checked: false },
		{ value: 9, display: '오렌지', checked: false },
		{ value: 10, display: '바이올렛', checked: false },
		{ value: 11, display: '메탈릭', checked: false },
		{ value: 12, display: '옐로우', checked: false },
	];

	// Q13
	pads: string[] = [
		{ value: 0, display: '노패드', checked: false },
		{ value: 0.4, display: '0.4cm', checked: false },
		{ value: 1.5, display: '1.5cm', checked: false },
		{ value: 3, display: '3cm', checked: false },
	];

	// Result - Product List
	prods: string[] = [
		{ value: 1, display: '베이직 3/4컵 투스트랩브라(BK)', link: 'http://vinaj.kr/product/detail.html?product_no=1638&cate_no=126    &display_group=1' },
		{ value: 2, display: '베이직 3/4컵 훅앤아이브라(BK)', link: 'http://vinaj.kr/product/detail.html?product_no=1649&cate_no=126    &display_group=1' },
		{ value: 3, display: '베이직 3/4컵 훅앤아이브라(SK)', link: 'http://vinaj.kr/product/detail.html?product_no=1664&cate_no=126    &display_group=1' },
		{ value: 4, display: '베이직 저중심 훅앤아이브라(BK)', link: 'http://vinaj.kr/product/detail.html?product_no=1652&cate_no=12    6&display_group=1' },
		{ value: 5, display: '베이직 저중심 훅앤아이브라(SK)', link: 'http://vinaj.kr/product/detail.html?product_no=1665&cate_no=12    6&display_group=1' },
		{ value: 6, display: '베이직 반컵 투스트랩브라(WH)', link: 'http://vinaj.kr/product/detail.html?product_no=1670&cate_no=126&    display_group=1' },
		{ value: 7, display: '베이직 반컵 투스트랩브라(SK)', link: 'http://vinaj.kr/product/detail.html?product_no=1657&cate_no=126&    display_group=1' },
		{ value: 8, display: '베이직 반컵 투스트랩브라(BK)', link: 'http://vinaj.kr/product/detail.html?product_no=1644&cate_no=126&    display_group=1' },
		{ value: 9, display: '베이직 저중심 원스트랩브라(SK)', link: 'http://vinaj.kr/product/detail.html?product_no=1662&cate_no=12    6&display_group=1' },
		{ value: 10, display: '베이직 저중심 원스트랩브라(BK)', link: 'http://vinaj.kr/product/detail.html?product_no=1648&cate_no=1    26&display_group=1' },

		{ value: 11, display: '베이직 저중심 원스트랩브라(WH)', link: 'http://vinaj.kr/product/detail.html?product_no=1667&cate_no=1    26&display_group=1' },
		{ value: 12, display: '리본베이직 저중심 원스트랩브라(WH)', link: 'http://vinaj.kr/product/detail.html?product_no=1668&cate_    no=90&display_group=1' },
		{ value: 13, display: '리본베이직 저중심 원스트랩브라(BK)', link: 'http://vinaj.kr/product/detail.html?product_no=1647&cate_    no=90&display_group=1' },
		{ value: 14, display: '리본초커 반컵 투스트랩브라(BK)', link: 'http://vinaj.kr/product/detail.html?product_no=1642&cate_no=9    0&display_group=1' },
		{ value: 15, display: '리본초커 반컵 투스트랩브라(WH)', link: 'http://vinaj.kr/product/detail.html?product_no=1669&cate_no=9    0&display_group=1' },
		{ value: 16, display: '리본초커 로고언더브라', link: 'http://vinaj.kr/product/detail.html?product_no=1636&cate_no=90&display    _group=1' },
		{ value: 17, display: '리본브이넥 아이코닉브라', link: 'http://vinaj.kr/product/detail.html?product_no=1533&cate_no=90&displ    ay_group=1' },
		{ value: 18, display: '사이드리본 저중심 원스트랩브라(WH)', link: 'http://vinaj.kr/product/detail.html?product_no=1666&cate_    no=90&display_group=1' },
		{ value: 19, display: '사이드 리본초커 저중심 원스트랩브라', link: 'http://vinaj.kr/product/detail.html?product_no=1666&cate_no=171&display_group=1' },
		{ value: 20, display: '로우브이 3/4컵 훅앤아이브라(BK)', link: 'http://vinaj.kr/product/detail.html?product_no=1651&cate_no=    126&display_group=1' },

    { value: 21, display: '로우브이 3/4컵 훅앤아이브라(SK)', link: 'http://vinaj.kr/product/detail.html?product_no=1663&cate_no=    126&display_group=1' },
		{ value: 22, display: '미들브이 3/4컵 훅앤아이브라(BK)', link: 'http://vinaj.kr/product/detail.html?product_no=1650&cate_no=    126&display_group=1' },
		{ value: 23, display: '심플와이 저중심 원스트랩브라(SK)', link: 'http://vinaj.kr/product/detail.html?product_no=1661&cate_no    =90&display_group=1' },
		{ value: 24, display: '심플와이 저중심 훅앤아이브라(BK)', link: 'http://vinaj.kr/product/detail.html?product_no=1653&cate_no    =126&display_group=1' },
		{ value: 25, display: '심플초커 투스트랩브라(BK)', link: 'http://vinaj.kr/product/detail.html?product_no=1637&cate_no=90&dis    play_group=1' },
		{ value: 26, display: '뉴웨이브 심플초커2 아이코닉 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1487&cate_no    =90&display_group=1' },
		{ value: 27, display: '글램 반컵 투스트랩브라(WH)', link: 'http://vinaj.kr/product/detail.html?product_no=1671&cate_no=90&di    splay_group=1' },
		{ value: 28, display: '글램 반컵 투스트랩브라(BK)', link: 'http://vinaj.kr/product/detail.html?product_no=1643&cate_no=90&di    splay_group=1' },
		{ value: 29, display: '글램 반컵 투스트랩브라(SK)', link: 'http://vinaj.kr/product/detail.html?product_no=1659&cate_no=90&di    splay_group=1' },
		{ value: 30, display: '글램 볼드언더브라', link: 'http://vinaj.kr/product/detail.html?product_no=1635&cate_no=90&display_gro    up=1' },
	
		{ value: 31, display: '볼드링 로고홀터 로고언더브라', link: 'http://vinaj.kr/product/detail.html?product_no=1503&cate_no=90&    display_group=1' },
		{ value: 32, display: '볼드링 로고홀터2 로고언더스트랩브라', link: 'http://vinaj.kr/product/detail.html?product_no=1501&cate    _no=90&display_group=1' },
		{ value: 33, display: '스트래피 브이홀터 볼드언더브라', link: 'http://vinaj.kr/product/detail.html?product_no=1531&cate_no=9    0&display_group=1' },
		{ value: 34, display: '와이초커 반컵 투스트랩브라(SK)', link: 'http://vinaj.kr/product/detail.html?product_no=1656&cate_no=9    0&display_group=1' },
		{ value: 35, display: '와이초커 투스트랩브라(BK)', link: 'http://vinaj.kr/product/detail.html?product_no=1639&cate_no=90&dis    play_group=1' },
		{ value: 36, display: '크로스아자스터 로고초커 로고언더브라', link: 'http://vinaj.kr/product/detail.html?product_no=1639&cat    e_no=90&display_group=1' },
		{ value: 37, display: '심플초커 저중심 원스트랩브라(SK)', link: 'http://vinaj.kr/product/detail.html?product_no=1660&cate_no    =90&display_group=1' },
		{ value: 38, display: '코르셋 원스트랩브라 (AA~C컵)', link: 'http://www.vinaj.kr/product/detail.html?product_no=1400&cate_no=126&display_group=1' },
		{ value: 39, display: '로우엑스0.5 아이코닉 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1469&cate_no=147&display_group=1' },
		{ value: 40, display: '투스트랩사이드글램초커 아이코닉브라', link: 'http://www.vinaj.kr/product/detail.html?product_no=1494&cate_no=90&display_group=1' },


		{ value: 41, display: '하이엑스 아이코닉 투스트랩 브라', link: 'http://www.vinaj.kr/product/detail.html?product_no=564&cate_no=90&display_group=1' },
		{ value: 42, display: '스트랩리스 반컵 투스트랩브라', link: 'http://www.vinaj.kr/product/detail.html?product_no=1675&cate_no=126&display_group=1' },
		{ value: 43, display: '볼드 심플초커 아자스터 아이코닉 브라', link: 'http://www.vinaj.kr/product/detail.html?product_no=1114&cate_no=90&display_group=1' },
		{ value: 44, display: '믹스와이 아이코닉 투스트랩 브라', link: 'http://shop1.vinajung.cafe24.com/product/detail.html?product_no=29&cate_no=90&display_group=1' },
		{ value: 45, display: '크로스엑스 아이코닉 투스트랩 브라', link: 'http://www.vinaj.kr/product/detail.html?product_no=436&cate_no=90&display_group=1' },
		{ value: 46, display: '로즈 초커 아이코닉 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1481&cate_no=147&display_group=1' },
		{ value: 47, display: '투스트랩 리본초커 아이코닉 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1389&cate_no=142&display_group=1' },
		{ value: 48, display: '다이아 투스트랩 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1622&cate_no=171&display_group=1' },
		{ value: 49, display: '글램홀터 아이코닉 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1419&cate_no=144&display_group=1' },
		{ value: 50, display: '심플 브이홀터 아이코닉 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1475&cate_no=147&display_group=1' },

		{ value: 51, display: '호리젠탈 언더스트랩 아이코닉 원스트랩 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1508&cate_no=126&display_group=1' },
		{ value: 52, display: '로고초커 로고언더스트랩 투스트랩 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1496&cate_no=171&display_group=1' },
		{ value: 53, display: '심플엑스 언더스트랩 아이코닉 원스트랩 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1399&cate_no=126&display_group=1' },
		{ value: 54, display: '글램베이직2 언더스트랩 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1423&cate_no=105&display_group=1' },
		{ value: 55, display: '볼드엑스 언더스트랩 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1581&cate_no=70&display_group=1' },
		{ value: 56, display: '심플초커 3/4컵 투스트랩 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1637&cate_no=171&display_group=1' },
		{ value: 57, display: '리본초커 아이코닉 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1380&cate_no=142&display_group=1' },
		{ value: 58, display: '글램 타이 언더스트랩 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1425&cate_no=105&display_group=1' },
		{ value: 59, display: '빅링 리본 베이직 아이코닉 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1388&cate_no=142&display_group=1' },
		{ value: 60, display: '사이드 글램초커 아이코닉 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1418&cate_no=144&display_group=1' },

		{ value: 61, display: '체인심플 브이홀터 아이코닉 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1476&cate_no=147&display_group=1' },
		{ value: 62, display: '로즈 와이타이 아이코닉 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1482&cate_no=147&display_group=1' },
		{ value: 63, display: '볼드 트랩 언더스트랩 홀터 투스트랩 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1529&cate_no=70&display_group=1' },
		{ value: 64, display: '스파이더 아이코닉 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1466&cate_no=147&display_group=1' },
		{ value: 65, display: '다이아 아이코닉 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1467&cate_no=147&display_group=1' },
		{ value: 66, display: '와이초커 3/4컵 투스트랩 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1639&cate_no=171&display_group=1' },
		{ value: 67, display: '크로스 초커 투스트랩 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1115&cate_no=171&display_group=1' },
		{ value: 68, display: '로고 윙 아이코닉 브라', link: '' },
		{ value: 69, display: '하이엑스 로고온 훅앤아이 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1619&cate_no=90&display_group=1' },
		{ value: 70, display: '로고 볼드엑스 언더스트랩 브라', link: 'http://vinaj.kr/product/detail.html?product_no=1580&cate_no=70&display_group=1' },

		{ value: 71, display: '심플와이 로고온 훅앤아이 브라', link: 'http://vinaj.kr/product/detail.html?product_no=418&cate_no=90&display_group=1' },
	];
}
