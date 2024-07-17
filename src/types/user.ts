import { ROLES } from "@/models";

export interface UserType {
  user?: UserType;
  id?: string;
  name?: string;
  isTwoFactorAuthenticationEnabled?: boolean;
  roles?: RoleType[];
  email: string;
}

export interface RoleType {
  id: string;
  role: ROLES;
  description: string;
  active: boolean;
}
