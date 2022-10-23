export interface IAccount {
  account: string;
  password: string;
}

export interface IUserInfo {
  email: string;
  id: string;
  role: string;
  state: string;
  user_name: string;
}

export interface ILoginInfo {
  token: string;
  userInfo: IUserInfo | undefined;
  userMenus: any[];
}
