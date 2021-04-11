import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { UserService } from "../user/user.service";
import { FooterComponent } from "./footer.component";

import { of } from "rxjs";

describe("FooterComponent", () => {
  let userService: UserService;
  let fixture: ComponentFixture<FooterComponent>;
  let component: FooterComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [RouterTestingModule],
      providers: [UserService],
    }).compileComponents();
  });

  beforeEach(() => {
    userService = TestBed.get(UserService);
    spyOn(userService, "getUser").and.returnValue(
      of({
        email: "flavio@gmail.com",
        name: "flavio",
        id: 1,
      })
    );

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be render FooterComponent", () => {
    expect(component).toBeTruthy();
  });
});
