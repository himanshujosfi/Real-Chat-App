import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify"

import './index.css'
import App from './App.tsx'
import { ContextUser } from './context/ContextUser.tsx';
import { BrowserRouter } from 'react-router-dom';


const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ContextUser>
          <ToastContainer position="top-right" autoClose={2000} />
          <App />
        </ContextUser>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode >
)

