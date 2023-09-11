import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import ApplyDoctor from './pages/ApplyDoctor';
import NotificationPage from './pages/NotificationPage';
import Users from './pages/admin/Users';
import Doctors from './pages/admin/Doctors';
import InsuranceProviders from './pages/admin/InsuranceProviders';
import Profile from './pages/doctor/Profile';
import BookingPage from './pages/BookingPage';
import Appointments from './pages/Appointments';
import DoctorAppointments from './pages/doctor/DoctorAppointments';
import Insurance from './pages/Insurance';
import ApplyInsuranceProvider from './pages/ApplyInsuranceProvider';
import InsuranceProviderDealsPage from './pages/insuranceProvider/getInsuranceProviderDeals';
import HealthInformationPage from './pages/insuranceProvider/HealthInformationPage';
import DoctorState from './context/doctor/DoctorState';
import CovidQuestionnaire from './pages/covidQuestionnaire';
import PatientProfile from './pages/patient/PatientProfile';
import ForgotPasswordForm from './pages/ForgotPasswordForm';
import ResetPasswordForm from './pages/ResetPasswordForm';
import HeaderFile from '../src/pages/homepage/HeaderFile';
import AboutFile from '../src/pages/homepage/AboutFile';

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <DoctorState>
        <BrowserRouter>
          {loading ? (
            <Spinner />
          ) : (
            <Routes>
              {/* <Route path='/' element={<HeaderFile />} /> */}

              <Route
                path='/'
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/apply-doctor'
                element={
                  <ProtectedRoute>
                    <ApplyDoctor />
                  </ProtectedRoute>
                }
              />
              <Route path='/home' element={<HeaderFile />} />

              <Route path='/homeabout' element={<AboutFile />} />
              <Route
                path='/apply-insuranceProvider'
                element={
                  <ProtectedRoute>
                    <ApplyInsuranceProvider />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/admin/users'
                element={
                  <ProtectedRoute>
                    <Users />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/admin/doctors'
                element={
                  <ProtectedRoute>
                    <Doctors />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/admin/insuranceProviders'
                element={
                  <ProtectedRoute>
                    <InsuranceProviders />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/doctor/profile/:id'
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/patient/profile/:id'
                element={
                  <ProtectedRoute>
                    <PatientProfile />
                  </ProtectedRoute>
                }
              />
              {/* <Route
                path='/profile'
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              /> */}

              <Route
                path='/insurance'
                element={
                  <ProtectedRoute>
                    <Insurance />
                  </ProtectedRoute>
                }
              />

              <Route
                path='/doctor/book-appointment/:doctorId'
                element={
                  <ProtectedRoute>
                    <BookingPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/doctor/covidQuestionnaire/:doctorId'
                element={
                  <ProtectedRoute>
                    <CovidQuestionnaire />
                  </ProtectedRoute>
                }
              />

              <Route
                path='/notification'
                element={
                  <ProtectedRoute>
                    <NotificationPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/login'
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path='/register'
                element={
                  <PublicRoute>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path='/forgot-password'
                element={
                  <PublicRoute>
                    <ForgotPasswordForm />
                  </PublicRoute>
                }
              />
              <Route
                path='/reset-password'
                element={
                  <PublicRoute>
                    <ResetPasswordForm />
                  </PublicRoute>
                }
              />
              <Route
                path='/appointments'
                element={
                  <ProtectedRoute>
                    <Appointments />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/doctor-appointments'
                element={
                  <ProtectedRoute>
                    <DoctorAppointments />
                  </ProtectedRoute>
                }
              />

              <Route
                path='/insuranceDeals'
                element={
                  <ProtectedRoute>
                    <InsuranceProviderDealsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/healthInformation'
                element={
                  <ProtectedRoute>
                    <HealthInformationPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          )}
        </BrowserRouter>
      </DoctorState>
    </>
  );
}

export default App;
