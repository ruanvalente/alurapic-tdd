import { environment } from "src/environments/environment.testing";
import { TestBed } from "@angular/core/testing";
import { TokenService } from "../token/token.service";
import { UserService } from "./user.service";

describe("UserService", () => {
  let userService: UserService;
  let tokenService: TokenService;
  let token = environment.token;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UserService, TokenService] });

    userService = TestBed.get(UserService);
    tokenService = TestBed.get(TokenService);
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  it("should be instanced", () => {
    expect(userService).toBeTruthy();
  });

  it("should use token for recover a user information", () => {
    userService.setToken(token);
    expect(userService.isLogged()).toBeTruthy();
    expect(userService.getUserName()).toBe("flavio");
    userService.getUser().subscribe({
      next: (user) => expect(user.name).toBe("flavio"),
    });
  });

  it("should remove a user information when logout", () => {
    userService.setToken(token);
    userService.logout();
    expect(userService.isLogged()).toBeFalsy();
    expect(userService.getUserName()).toBeFalsy();
  });
});
