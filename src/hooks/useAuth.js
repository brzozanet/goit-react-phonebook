import { useSelector } from 'react-redux';

import {
  selectIsRefreshing,
  selectUser,
  selectisLoggedIn,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectisLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  return { user, isLoggedIn, isRefreshing };
};
