import { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  /*-------------------- Skip line --------------------*/

  return (
    <GeneralContext.Provider
      value={{
        show,
        setShow,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
