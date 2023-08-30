import {TestBed} from '@angular/core/testing';

import {ContentfulService} from 'src/app/services/contentful.service';

describe('ContentfulServiceService', () => {
    let service: ContentfulService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ContentfulService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
