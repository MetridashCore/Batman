import React, { createContext, useContext, useState } from 'react';

interface SessionContextProps {
  sessionId: string;
  updateSessionId: (newSessionId: string) => void;
}

const SessionContext = createContext<SessionContextProps | null>(null);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [sessionId, setSessionId] = useState('');

  const updateSessionId = (newSessionId: string) => {
    setSessionId(newSessionId);
  };

  return (
    <SessionContext.Provider value={{ sessionId, updateSessionId }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const session = useContext(SessionContext);

  if (!session) {
    throw new Error('useSession must be used within a SessionProvider');
  }

  return session;
}