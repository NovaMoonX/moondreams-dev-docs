import { getInitials } from '@/utils/accountUtils';
import { Avatar, AvatarProps } from '@moondreamsdev/dreamer-ui/components';

export type UserAvatarData = {
  uid?: string;
  displayName?: string | null;
  email?: string | null;
  photoURL?: string | null;
};

export interface UserAvatarProps extends AvatarProps {
  user?: UserAvatarData | null;
}

function UserAvatar({
  user,
  size = 'sm',
  className,
  ...rest
}: UserAvatarProps) {
  const displayName = user?.displayName?.trim() || user?.email || '??';
  const initials = user?.photoURL ? undefined : getInitials(displayName);

  return (
    <Avatar
      {...rest}
      src={user?.photoURL ?? undefined}
      alt={displayName}
      title={displayName}
      initials={initials}
      size={size}
      shape='circle'
      className={className}
    />
  );
}

export default UserAvatar;
