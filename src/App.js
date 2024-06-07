import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './Form';
import Success from './Success';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
