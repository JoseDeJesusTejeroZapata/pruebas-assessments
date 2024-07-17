// import { useQuery } from "react-query";
// import { useAxios } from "./useAxios";
// import { me_profile } from "@/services/auth";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAppDispatch } from "@/redux/hooks";
// import { logout } from "@/redux/slices/auth.slice";

// export const useAuth = () => {
//   const axios = useAxios();
//   const { isError } = useQuery("auth", () => me_profile(axios));
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (isError) {
//       dispatch(logout());
//       navigate("/login");
//     }
//   }, [isError,navigate, dispatch]);
// };
