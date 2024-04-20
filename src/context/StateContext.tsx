import { createContext, useContext, useEffect, useState } from "react";

type ContextType = {
  screenSize: number;
};

type ProviderProps = {
  children: React.ReactNode;
};

const StateContext = createContext<ContextType>({
  screenSize: window.innerWidth,
});

export const StateProvider = ({ children }: ProviderProps) => {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StateContext.Provider value={{ screenSize }}>
      {children}
    </StateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context)
    throw new Error("Content should be rendered in a state context");
  return context;
};
