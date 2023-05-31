import { useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import ResgisterLayout from './layouts/RegisterLayout'
import MainLayout from './layouts/MainLayout'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '/register',
      element: (
        <ResgisterLayout>
          <Register />
        </ResgisterLayout>
      )
    },
    {
      path: '/login',
      element: (
        <ResgisterLayout>
          <Login />
        </ResgisterLayout>
      )
    }
  ])
  return routeElements
}
