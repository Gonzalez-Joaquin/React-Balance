import { Outlet } from 'react-router-dom'

import { DefaultLayout } from '../../Layouts'

const Users = () => {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  )
}

export default Users
  