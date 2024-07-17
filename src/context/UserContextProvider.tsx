// import { IAccount, IProfile } from "@/hooks/useProfile";
// import { IUserContext } from "@/pages/User/Home/Home";

// import { ReactNode, createContext, useEffect, useState } from "react";

// export const UserContext = createContext<IUserContext>({} as IUserContext);
// interface UserProviderProps {
//   children: ReactNode;
//   profile: IProfile;
// }
// export default function UserProvider({
//   children,
//   profile,
// }: React.PropsWithChildren<UserProviderProps>) {
//   const [account, setAccount] = useState<IAccount>({} as IAccount);
//   const [profileUser, setProfileUser] = useState<Omit<IProfile, "account">>(
//     {} as Omit<IProfile, "account">
//   );
//   useEffect(() => {
//     if (profile.account) {
//       setAccount(profile.account);
//       setProfileUser(profile);
//     }
//   }, [profile]);
//   return (
//     <UserContext.Provider value={{ account, profileUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
