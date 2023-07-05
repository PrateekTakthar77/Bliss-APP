import React from 'react'
import AppNavigator from './src/Navigation/AppNavigator'
import Wait from './src/Screens/Wait'
import { AuthContext, AuthProvider } from './src/Screens/AuthContext'

const App = () => {
  return (
    <AppNavigator />
  )
}

export default App