import { Outlet } from 'react-router-dom';

import Dashboard from "../components/dashboard";

const MyAccount = () => {

  return (
    <div>
    <Dashboard/>
    <Outlet/>
    </div>
  );
};

export default MyAccount;