import _ from 'lodash';
import { Navigate, useLocation } from 'react-router-dom';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { Role } from '@/common/types';

type Props = {
  component: React.ComponentType<any>;
  roles?: Role[];
};

const GuardRoute = (props: Props) => {
  const { component: Component, roles } = props;
  const { keycloak, authenticated } = useGlobalContext();
  const location = useLocation();

  if (!authenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  const checkAuthorization = (roles?: Role[]) => {
    if (roles) {
      return _.some(roles, (role) =>
        keycloak?.hasResourceRole(role, 'nest-app'),
      );
    }
    return false;
  };

  if (!checkAuthorization(roles)) {
    return <Navigate to='/403' state={{ from: location }} replace />;
  }

  return <Component />;
};

export default GuardRoute;
