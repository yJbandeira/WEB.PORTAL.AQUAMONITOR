import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
} from "react";

interface StoreContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

interface StoreProviderProps {
  children: ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <StoreContext.Provider value={{ loading, setLoading }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore(): StoreContextType {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore deve ser usado dentro de um StoreProviderProps");
  }
  return context;
}
