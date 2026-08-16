'use client';

import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
  useCallback,
} from 'react';

// This is a simplified, mock user type for the example
type User = {
  username: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (username: string, pass: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hardcoded credentials
const ADMIN_USERNAME = 'cgepala1110';
const ADMIN_PASSWORD = 'cgepala1110';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for a logged-in user in session storage on component mount
    try {
      const storedUser = sessionStorage.getItem('admin-user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Failed to parse user from session storage', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(async (username: string, pass: string) => {
    if (username === ADMIN_USERNAME && pass === ADMIN_PASSWORD) {
      const userData = { username };
      setUser(userData);
      try {
        sessionStorage.setItem('admin-user', JSON.stringify(userData));
      } catch (error) {
        console.error('Failed to set user in session storage', error);
      }
    } else {
      throw new Error('Invalid username or password.');
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    try {
      sessionStorage.removeItem('admin-user');
    } catch (error) {
      console.error('Failed to remove user from session storage', error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
