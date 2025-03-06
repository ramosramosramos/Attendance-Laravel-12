import { createContext, useContext } from "react";
// Create context
// Define context for modal control
interface CalendarContextType {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }


export const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendarContext must be used within CalendarContext.Provider");
  }
  return context;
};
