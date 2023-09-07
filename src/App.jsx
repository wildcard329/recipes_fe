import './App.css'
import AppLayout from './AppLayout'
import AppRouter from './AppRouter'
import { UserProvider, RecipeProvider, PageNavProvider } from './state/providers'

const App = () =>
  <UserProvider>
    <RecipeProvider>
      <PageNavProvider>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </PageNavProvider>
    </RecipeProvider>
  </UserProvider>

export default App
