import {
  TestBed,
  async
} from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  AppComponent
} from './app.component';
import {
  routes
} from './app-routing.module';
import {
  WeatherReportComponent
} from './components/weather-report/weather-report.component';
import {
  MatProgressBarModule
} from '@angular/material/progress-bar';
describe('AppComponent', () => {
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatProgressBarModule
      ],
      declarations: [
        AppComponent,
        WeatherReportComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have as title 'back-base'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('back-base');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Weather Report');
  });
});
