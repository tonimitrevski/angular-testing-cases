import {ValueService} from '../demo';
import {of} from 'rxjs';

describe('demo (no TestBed): Observable', () => {
  let service: ValueService;
  beforeEach(() => { service = new ValueService(); });
  it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
      service.getObservableValue().subscribe(value => {
        expect(value).toBe('observable value');
        done();
      });
    });

  it('#getObservableValue should return value from observable mocked',
    (done: DoneFn) => {
      spyOn(service, 'getObservableValue').and.returnValue(of('mocked value'));
      service.getObservableValue().subscribe(value => {
        expect(value).toBe('mocked value');
        done();
      });
    });
});
