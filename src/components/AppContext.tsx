import { createContext, useContext, useState, type ReactNode } from "react";


type AppContextMap = {
    data: {
        shirtPicked?: string
    },

    setData(newData: Partial<AppContextMap["data"]>): void;
};

const AppContext = createContext({});


export function AppContextProvider({ children }: { children: ReactNode }) {
    

    const [data, setDataState] = useState<AppContextMap["data"]>({})


    const setData: AppContextMap["setData"] = (data) => {
        setDataState(prev => ({
            ...prev,
            ...data
        }));
    }

    return <AppContext.Provider value={{data,setData}}>
        {children}
    </AppContext.Provider>
}

export function useAppContext() {
    return useContext(AppContext) as AppContextMap;
}
