import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from '../components/Root'
import Home from '../pages/Home'
import TvDetail from '../pages/TvDetail'
import Search from '../pages/Search'
import Error from '../components/Error'

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'tvshows/:id',
          element: <TvDetail />,
        },
        {
          path: 'search',
          element: <Search />,
        },
        // {
        //   path: '*',
        //   element: <Error />,
        // },
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
