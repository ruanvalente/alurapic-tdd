import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { UserService } from "./../user/user.service";
import { AuthService } from "./auth.service";

describe("AuthService", () => {
  let authService: AuthService;
  let httpMock: HttpTestingController;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });

    authService = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
    userService = TestBed.get(UserService);
  });

  it("should be instanced", () => {
    expect(authService).toBeTruthy();
  });

  it("should authenticate a user", fakeAsync(() => {
    const fakeBody = { id: 1, name: "flavio", email: "flavio@gmail.com" };

    const spy = spyOn(userService, "setToken").and.returnValue(null);

    authService.authenticate("flavio", "123").subscribe({
      next: (response) => {
        expect(response.body).toEqual(fakeBody);
        expect(spy).toHaveBeenCalledWith("tokenTest");
      },
    });

    const fakeRequest = httpMock.expectOne((request) => {
      return request.method === "POST";
    });

    fakeRequest.flush(fakeBody, {
      headers: { "x-access-token": "tokenTest" },
    });

    tick();
  }));
});
