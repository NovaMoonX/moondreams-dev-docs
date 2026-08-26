import UserAvatar, { UserAvatarProps } from '@/components/UserAvatar';
import { useAuth } from '@hooks/useAuth';

type AuthAvatarProps = Omit<UserAvatarProps, 'user'>;

function AuthAvatar({ size = 'md', ...rest }: AuthAvatarProps) {
  const { user } = useAuth();

  return <UserAvatar user={user} size={size} {...rest} />;
}

export default AuthAvatar;
