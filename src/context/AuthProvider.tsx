import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export interface AuthUser {
  id: string;
  displayName: string;
  email: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  isGuest: boolean;
  /** Stub sign-in for Phase 2 — swaps to real OAuth later. */
  signIn: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

/** Phase 1 auth stub — guest browsing, optional mock sign-in. */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const signIn = useCallback(() => {
    setUser({
      id: 'guest_demo',
      displayName: 'Bengal Explorer',
      email: 'you@example.com',
    });
  }, []);

  const signOut = useCallback(() => setUser(null), []);

  const value = useMemo(
    () => ({
      user,
      isGuest: user === null,
      signIn,
      signOut,
    }),
    [user, signIn, signOut],
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
