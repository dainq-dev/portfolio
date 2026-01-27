'use client'

import React from 'react'
import ContactForm from './contact-form'

export default function ContactSection() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out using the form below or through my direct contact information.
        </p>
      </div>

      <ContactForm />
    </div>
  )
}
