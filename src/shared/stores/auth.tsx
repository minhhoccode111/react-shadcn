import { create } from "zustand";

import { AuthStoreName } from "@/shared/constants";

type StateAuthStore = {
  authData: AuthData;
};

type ActionAuthStore = {
  setAuthData: (data: AuthData) => void;
};

type AuthData = {
  user?: {
    bio: string;
    email: string;
    image: string;
    username: string;
    isAuthor: boolean;
    token: string;
  };
  // add more here
};

const useAuthStore = create<StateAuthStore & ActionAuthStore>((set) => {
  const authData =
    localStorage.getItem(AuthStoreName) === null
      ? {}
      : JSON.parse(localStorage.getItem(AuthStoreName) as string);

  return {
    authData,
    setAuthData: (data) => {
      console.log(`the authData is: `, data); // TODO: turn off
      localStorage.setItem(AuthStoreName, JSON.stringify(data));
      set(() => ({ authData: data }));
    },
  };
});

export default useAuthStore;
