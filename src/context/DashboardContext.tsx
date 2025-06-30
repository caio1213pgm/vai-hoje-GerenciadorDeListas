import { createContext, useContext, useState } from "react";

type DashboardContextProps = {
  valueMenu: string | undefined;
  setValueMenu: (value: string) => void;
};

const DashboardContext = createContext<DashboardContextProps>({
  valueMenu: "",
  setValueMenu: () => [],
});

export default function DashboardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [valueMenu, setValueMenu] = useState<string | undefined>();
  return (
    <DashboardContext.Provider value={{ valueMenu, setValueMenu }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  return useContext(DashboardContext);
}
