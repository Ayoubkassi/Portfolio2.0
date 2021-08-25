import React from 'react'
import { Main , Title , Btn , Info , Container } from './ContactForm.styles';

const ContactForm = () => {
  return (
    <Main>
      <Container>
      <Title>Send me an email</Title>
        <form>
          <div class="form-group">
            <div class="form-group">
              <label htmlFor="name">Name</label>
            <input type="text" required className="form-control" />
            </div>
            <label htmlFor="Email">Email address</label>
          <input type="email" required className="form-control" />
          </div>
          <div class="form-group">
            <label htmlFor="subject">Subject</label>
          <input type="text" required className="form-control" />
          </div>
          <div className="form-group">
           <label htmlFor="select">Reason</label>
           <select className="form-control">
             <option>Jus to say Hi</option>
             <option>Business</option>
             <option>Software</option>
             <option>Electronics</option>
             <option>Youtube</option>
             <option>Social Media</option>
             <option>Other</option>
           </select>
         </div>
         <div className="form-group">
          <label htmlFor="textarea">Message</label>
        <textarea className="form-control" required  rows="4"></textarea>
        </div>
          <Btn type="submit">Submit</Btn>
        </form>
        <Info>
          <p>business@ayoubkassi.io</p>
          <p>or</p>
          <p>ayoub@ayoubkassi.io</p>
        </Info>
        </Container>
    </Main>
  )
}

export default ContactForm;
