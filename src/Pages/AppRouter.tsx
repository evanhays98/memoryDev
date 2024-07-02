import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import React from 'react';
import { Content } from '../libs/core/Content';
import { Tech } from './Techs/Tech';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Content />}>
        <Route path="" element={<Home />} />
        <Route path="*" element={<Tech />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
