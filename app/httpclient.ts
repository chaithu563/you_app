import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
import {Injectable} from 'angular2/core';
@Injectable()
export class HttpClient {
    http: Http;
    constructor(http: Http) {
        this.http = http;
    }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Bearer ' +
           'ya29.pwLSdM-P0uqNWWZSKfWxVZgkvyrF0Eqaeh_ATjZuXnzkzWRst0zemXLPUxQWpKXiiPA');
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