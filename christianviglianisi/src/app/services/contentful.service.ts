import {Injectable} from '@angular/core';
import {createClient} from "contentful";
import {environment} from "src/environments/environment";
import {from, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ContentfulService {

    private client = createClient({
        space: environment.spaceId,
        accessToken: environment.contentDeliveryApi
    });

    constructor() {
    }

    getAllEntries(): Observable<any> {
        return from(this.client.getEntries());
    }
}
