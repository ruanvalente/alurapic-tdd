import { TokenService } from "./token.service";

describe("TokenService", () => {
  let tokenService: TokenService;
  let token = "auhsua1092k21a19kkjjs2";

  beforeEach(() => {
    tokenService = new TokenService();
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  it("should be instanced", () => {
    expect(tokenService).toBeTruthy();
  });

  it("should be save a token", () => {
    if (!tokenService.hasToken()) {
      tokenService.setToken(token);
    }
    expect(tokenService.hasToken()).toBeTruthy();
    expect(tokenService.getToken()).toBe(token);
  });

  it("should be remove a token", () => {
    if (!tokenService.hasToken()) {
      tokenService.removeToken();
    }
    expect(tokenService.hasToken()).toBeFalsy();
    expect(tokenService.getToken()).toBeNull();
  });
});
