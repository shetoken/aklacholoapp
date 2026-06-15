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

export interface SignUpInput {
  displayName: string;
  email: string;
  password: string;
}

export interface SignInInput {
  email: string;
  password: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  isGuest: boolean;
  /** Phase 1 stub — real OAuth / API in Phase 2. */
  signUp: (input: SignUpInput) => void;
  signIn: (input: SignInInput) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

/** Phase 1 auth stub — guest browsing; sign-up and sign-in forms collect credentials locally. */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const signUp = useCallback(({ displayName, email }: SignUpInput) => {
    setUser({
      id: `user_${Date.now()}`,
      displayName: displayName.trim(),
      email: email.trim().toLowerCase(),
    });
  }, []);

  const signIn = useCallback(({ email }: SignInInput) => {
    const normalized = email.trim().toLowerCase();
    const local = normalized.split('@')[0] ?? 'friend';
    const displayName = local.charAt(0).toUpperCase() + local.slice(1);
    setUser({
      id: 'returning_user',
      displayName,
      email: normalized,
    });
  }, []);

  const signOut = useCallback(() => setUser(null), []);

  const value = useMemo(
    () => ({
      user,
      isGuest: user === null,
      signUp,
      signIn,
      signOut,
    }),
    [user, signUp, signIn, signOut],
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
