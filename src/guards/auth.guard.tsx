// // import { useAuth } from "@/hooks/useAuth";
// import { ROLES } from "@/models";
// import { PrivateRoutesGuest, PublicRoutes } from "@/models/routes";
// import { useAppSelector } from "@/redux/hooks";
// import { selectIsLoggedIn, selectUser } from "@/redux/slices/auth.slice";
// import { UserType } from "@/types/user";
// import { Navigate, Outlet } from "react-router-dom";

// export interface Props {
//   role?: ROLES;
//   routeLogin?: string;
// }

// export const AuthGuard = ({ role, routeLogin = PublicRoutes.LOGIN }: Props) => {
//   const user: UserType = useAppSelector(selectUser);
//   const isLoggedIn = useAppSelector(selectIsLoggedIn);

//   if (!user) return <Navigate to={routeLogin} />;

//   if (!role) return <Outlet />;

//   if (!isLoggedIn)
//     return (
//       <Navigate
//         replace
//         to={`${PrivateRoutesGuest.GUEST}/${PrivateRoutesGuest.TWOFA}`}
//       />
//     );
//   const userRole =
//     user.roles?.find((r) => r.role == role) ||
//     user.user?.roles?.find((r) => r.role == role);
//   if (!(role && userRole)) {
//     return <Navigate to={routeLogin} />;
//   }

//   return <Outlet />;
// };

// export default AuthGuard;
