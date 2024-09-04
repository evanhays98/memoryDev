import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import React from 'react';
import { Content } from '../libs/core/Content';
import { Tech } from './Techs/Tech';
import { Spelling } from './Spelling/Spelling';
import { SurveyTest } from './SurveyTest/SurveyTest';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Content />}>
        <Route path="" element={<Home />} />
        <Route path="spelling" element={<Spelling />} />
        <Route path="tech" element={<Tech />} />
        <Route path="test" element={<SurveyTest />} />
        <Route path="*" element={<Tech />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
