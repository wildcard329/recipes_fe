import './App.css'
import AppLayout from './AppLayout'
import AppRouter from './AppRouter'
import { UserProvider, RecipeProvider } from './state/providers'

const App = () =>
  <UserProvider>
    <RecipeProvider>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </RecipeProvider>
  </UserProvider>

export default App
