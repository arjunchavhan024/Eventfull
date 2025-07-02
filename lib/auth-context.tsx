'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type User = {
  id: string;
  email: string;
  name: string;
  type: 'fan' | 'celebrity';
  avatar?: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string, type: 'fan' | 'celebrity') => Promise<void>;
  register: (email: string, password: string, name: string, type: 'fan' | 'celebrity') => Promise<void>;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('celebnetwork_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, type: 'fan' | 'celebrity') => {
    // Mock login - replace with actual API call
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      type,
      avatar: `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop`
    };
    
    setUser(mockUser);
    localStorage.setItem('celebnetwork_user', JSON.stringify(mockUser));
  };

  const register = async (email: string, password: string, name: string, type: 'fan' | 'celebrity') => {
    // Mock registration - replace with actual API call
    const mockUser: User = {
      id: Date.now().toString(),
      email,
      name,
      type,
      avatar: `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop`
    };
    
    setUser(mockUser);
    localStorage.setItem('celebnetwork_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('celebnetwork_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}