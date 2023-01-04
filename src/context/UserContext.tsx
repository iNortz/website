import React, {
  createContext,
  PropsWithChildren,
  useState,
} from 'react'

import { api } from '~/config/Axios'
import { User } from '../utils/UserInterface'

interface UserContextData {}

interface Props {
  children?: React.ReactNode
}

const UserContext = createContext({} as UserContextData)

export const UserProvider: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  useState
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>
}
