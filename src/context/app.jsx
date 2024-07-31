import { createContext, useContext } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const data = {}
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}

const useApp = () => useContext(AppContext)

export { AppProvider, useApp }
