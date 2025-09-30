import constate from 'constate';
import { useCallback, useState } from 'react';

export interface ILoginState {
  email?: string;
  method: 'email' | 'google';
  showFooterMessage?: boolean;
}

const useLoginState = () => {
  const [state, setState] = useState<ILoginState>({
    method: 'google',
  });

  const setMethod = useCallback((method: ILoginState['method']) => {
    setState((s) => ({
      ...s,
      method: method,
    }));
  }, []);

  const setEmail = useCallback((email: ILoginState['email']) => {
    setState((s) => ({
      ...s,
      email,
    }));
  }, []);

  const setShowFooterMessage = useCallback((showFooterMessage: ILoginState['showFooterMessage']) => {
    setState((s) => ({
      ...s,
      showFooterMessage,
    }));
  }, []);

  return {
    state,
    setMethod,
    setEmail,
    setShowFooterMessage,
  };
};

const [LoginProvider, useLogin] = constate(useLoginState);
LoginProvider.displayName = 'LoginProvider';

export { LoginProvider, useLogin };
