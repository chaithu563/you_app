import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
@Injectable()
export class HttpClient {
    http: Http;
    constructor(http: Http) {
        this.http = http;
    }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Bearer ' +
           'ya29.oAJ07SJEgeAUynYIaV7sngYtFFNy_aqE20TnRSzOHyJ1K8aiuP_yvhQHMHMazqxxeUY');
    }

    get(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    }

    post(url, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }
}