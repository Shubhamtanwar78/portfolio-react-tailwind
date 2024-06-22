import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className=" bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-extrabold text-gray-900">Contact Me</h1>
        <p className="mt-2 text-lg text-gray-600">Feel free to reach out to us using the contact form below:</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
