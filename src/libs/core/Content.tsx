import { NavBar } from './NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Content = () => {
  return (
    <NavBar>
      <Outlet />
    </NavBar>
  );
};
