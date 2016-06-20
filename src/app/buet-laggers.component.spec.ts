import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BuetLaggersAppComponent } from '../app/buet-laggers.component';

beforeEachProviders(() => [BuetLaggersAppComponent]);

describe('App: BuetLaggers', () => {
  it('should create the app',
      inject([BuetLaggersAppComponent], (app: BuetLaggersAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'buet-laggers works!\'',
      inject([BuetLaggersAppComponent], (app: BuetLaggersAppComponent) => {
    expect(app.title).toEqual('buet-laggers works!');
  }));
});
