import React from "react";

export const DataContext = React.createContext(null as any);

export const DataStorage = ({ children }: any) => {
  const [data, setData] = React.useState();

  React.useEffect(() => {}, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
