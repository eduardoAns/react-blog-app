import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from './routes/AuthRoutes';
import { Navigation } from './routes/Navigation';

function App() {
  return (
      <BrowserRouter>
            <div>         
                <Routes>
                    <Route path ="/auth/*" element={<AuthRoutes />} />
                    <Route path ="/*" element={<Navigation />} />
                </Routes>
            </div>
      </BrowserRouter>
    
  );
}

export default App;
