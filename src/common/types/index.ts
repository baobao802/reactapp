export enum Role {
  APP_ADMIN = 'app_admin',
  APP_USER = 'app_user',
}

export type UserProfile = {
  id: string;
  givenName: string;
  familyName: string;
  username: string;
  email: string;
  telephone: string;
  roles: Role[];
  emailVerified: boolean;
  enabled: boolean;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
};
