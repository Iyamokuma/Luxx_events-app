import { Outlet } from 'react-router-dom';
import { ContactModalProvider } from '../../context/ContactModalContext';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <ContactModalProvider>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </ContactModalProvider>
  );
}
