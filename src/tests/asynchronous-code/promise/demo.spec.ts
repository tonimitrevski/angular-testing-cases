import {ValueService} from '../demo';

describe('demo (no TestBed): Promise', () => {
  let service: ValueService;
  beforeEach(() => { service = new ValueService(); });
  it('#getPromiseValue should return value from promise',
    (done: DoneFn) => {
      service.getPromiseValue().then(value => {
        expect(value).toBe('promise value');
        done();
      });
    });

  it('#getPromiseValue should return value from promise mocked',
    (done: DoneFn) => {
      spyOn(service, 'getPromiseValue').and.returnValue(Promise.resolve('mocked value'));
      service.getPromiseValue().then(value => {
        expect(value).toBe('mocked value');
        done();
      });
    });

  it('#getPromiseValue should return error from promise mocked failed',
    (done: DoneFn) => {
        spyOn(service, 'getPromiseValue').and.returnValue(
            Promise.reject('test error promises')
        );
        service.getPromiseValue().catch(
            error => {
                expect(error).toBe('test error promises');
                done();
            }
        );
    });
});
