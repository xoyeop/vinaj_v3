import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
	//private baseUrl = "http://192.168.179.129/quiz_writer.php";
	//private answerUrl = "http://192.168.179.129/quiz_reader.php";

	//private baseUrl = "http://stdio.kr:8080/quiz_writer.php";
	//private answerUrl = "http://stdio.kr:8080/quiz_reader.php";

	private baseUrl = "http://45.249.160.212/quiz_writer.php";
	private answerUrl = "http://45.249.160.212/quiz_reader.php";

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor (
		private http: Http
	){}

	answer: any[];

	readQuiz(): Promise<void> {
		return this.http.get(this.answerUrl)
			.toPromise()
			.then(response => {
				this.answer = response.json();
			})
			.catch(this.handleError);
	}

	saveQuiz(quiz: any[]): Promise<void> {
		console.log(JSON.stringify(quiz));
		return this.http
			.post (this.baseUrl
				, JSON.stringify(quiz)
				, { headers: this.headers })
			.toPromise()
			.then (res => {
				console.log("eeee", res);
			})
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('error!!', error);

		return Promise.reject(error.message || error);
	}
}
