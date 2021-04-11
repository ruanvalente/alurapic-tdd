import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UserService } from "../user/user.service";
import { FooterComponent } from "./footer.component";

describe("FooterComponent", () => {
  let userService: UserService;
  let fixture: ComponentFixture<FooterComponent>;
  let component: FooterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      providers: [userService],
    }).compileComponents();

    userService = TestBed.get(UserService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be render FooterComponent", () => {
    expect(component).toBeTruthy();
  });
});
