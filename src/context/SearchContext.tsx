import { createContext, useContext, useState } from "react";

import type { ReactNode } from "react";


interface InputContextType {
  text: string;
  setText: (value: string) => void;
}

const InputContext = createContext<InputContextType | undefined>(undefined);


export function InputProvider({ children }: { children: ReactNode }) {
  const [text, setText] = useState<string>("");

  return (
    <InputContext.Provider value={{ text, setText }}>
      {children}
    </InputContext.Provider>
  );
}

export function useInput() {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("useInput must be used inside InputProvider");
  }
  return context;
}
