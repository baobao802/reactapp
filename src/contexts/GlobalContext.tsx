import React, { useContext, useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';

export type GlobalContextType = {
  keycloak?: Keycloak;
  authenticated: boolean;
};

export const GlobalContext = React.createContext<GlobalContextType>({} as any);

export const GlobalProvider = (props: any) => {
  const [keycloak, setKeycloak] = useState<Keycloak>();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const keycloakInstance = new Keycloak('/keycloak.json');
    keycloakInstance
      .init({
        onLoad: 'login-required',
      })
      .then((authenticated) => {
        if (authenticated) {
          keycloakInstance.loadUserProfile();
        }
        setKeycloak(keycloakInstance);
        setAuthenticated(authenticated);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        keycloak,
        authenticated,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
