import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from './components/App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
const quertClient=new QueryClient();

createRoot(document.getElementById('root')!).render(
//   <StrictMode>
    <QueryClientProvider client={quertClient} >

     <App />
     <ReactQueryDevtools />
     
    </QueryClientProvider>
)
