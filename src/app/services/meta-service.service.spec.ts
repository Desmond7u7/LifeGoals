import { TestBed } from '@angular/core/testing';
import { MetaServiceService } from './meta-service.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../environments/environment';

describe('MetaServiceService', () => {
  let service: MetaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule
      ],
      providers: [MetaServiceService]
    });
    service = TestBed.inject(MetaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});