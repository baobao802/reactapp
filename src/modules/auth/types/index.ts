import { UserProfile } from '@/common/types';

export type Credentials = {
  username: string;
  password: string;
  remember?: boolean;
};

export type LoginResponse = {
  user: UserProfile;
};
