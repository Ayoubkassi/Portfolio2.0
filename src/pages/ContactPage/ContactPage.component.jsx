import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.component';
import Connect from '../../components/Connect/Connect.component';
import Footer from '../../components/Footer/Footer.component';
import Media from '../../components/Social/Social.component';
import ContactForm  from '../../components/ContactForm/ContactForm.component';
import { Main } from './ContactPage.styles';

const ContactPage = () => {
  return (
    <Main>
      <Navbar background="white" color="black"/>
      <ContactForm />
      <Connect />
      <Footer />
    </Main>
  )
}

export default ContactPage;
