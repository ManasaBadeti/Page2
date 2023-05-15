import React, {lazy, Suspense} from 'react'
import { Route, Navigate, Routes} from 'react-router-dom';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

// import Header from './components/Header';
// import Footer from './components/Footer';

// import {baseTheme} from './utils/Theme'
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { ColorModeContextProvider } from "./utils/ColorModeContext";
import  Header  from "./layouts/Header";
import  GStyle from './GStyle';

/*****Pages******/
const Home = lazy(() => import("./pages/Home"));
// const RegisteredPatient = lazy(() => import("./pages/RegisteredPatient"));
const Login = lazy(() => import("./pages/Login/Login"));
const RoleMaster = lazy(() => import("./pages/RoleMaster"));
const PatientReg = lazy(() => import("./pages/PatientReg"));
const RegisterGrievance = lazy(() => import("./pages/RegisterGrievance"));
// const RegisteredPatientView = lazy(() => import("./pages/RegisteredPatientView"));
// const ReferredPatientView = lazy(() => import("./pages/ReferredPatientView"));
// const TelephonicRegView = lazy(() => import("./pages/TelephonicRegView"));
// const TelephonicRegistration = lazy(() => import("./pages/TelephonicRegistration"));
// const TelephonicRegEdit = lazy(() => import("./pages/TelephonicRegEdit"));





// import FullLayout from "./layouts/FullLayout";

const App = () => {

  // const lightTheme = createTheme({
  //   palette: {
  //     mode: 'light',
  //     primary: {
  //       main: "#0d47a1",
  //       light: "#e6f4ff",
  //     },
  //     secondary: {
  //       main: "#1e4db7",
  //     },
  //   },
  // });
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: 'dark',
  //   },
  // });
  
  return (
    <>
      {/* <ThemeProvider theme={lightTheme}> */}
      <ColorModeContextProvider>
      {/* <ThemeProvider theme={GStyle}> */}
          <AppRoutes/>
          {/* </ThemeProvider> */}
      </ColorModeContextProvider>
      {/* </ThemeProvider> */}
    </>
  );
}


const AppRoutes = () => {
  return (
    <Suspense fallback={<div />}>
      {/* <Router> */}
      <Routes>
      <Route path="/" element={<Login/>} exact />
     
      <Route element={<Header />}>
        <Route path="/home" element={<Home/>} />
        {/* <Route path="/rolemaster" element={<RoleMaster/>} /> */}
        <Route path="/registerGrievance" element={<RegisterGrievance/>} />
          {/* {menu.map((page, index) => {
            return (
              <Route
                exact
                element={page.pageLink}
                render={({match}) => <page.view />}
                key={index}
              />
            );
          })} */}
          {/* <Navigate to="/" /> */}
          
          
        </Route>
      </Routes>
      {/* </Router> */}
    </Suspense>
  );
}


export default App
