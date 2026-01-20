import { useState } from 'react'

const faqs = [
  {
    question: 'How long does the free trial last?',
    answer: 'Our free trial lasts 14 days and includes full access to all Professional plan features. No credit card required.'
  },
  {
    question: 'Can I get a demo of the platform?',
    answer: "Absolutely! Fill out the contact form and select 'Request Demo' as the subject. Our team will reach out within 24 hours to schedule a personalized demo."
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer email support for all plans, priority support for Professional plans, and dedicated support with an assigned account manager for Enterprise plans.'
  }
]

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    companySize: '',
    subject: '',
    message: '',
    subscribe: false,
    contactMethod: 'email'
  })
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const submitForm = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      companySize: '',
      subject: '',
      message: '',
      subscribe: false,
      contactMethod: 'email'
    })
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Get in Touch</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Have a question or want to learn more? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={submitForm} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input name="firstName" value={form.firstName} onChange={handleChange} type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input name="lastName" value={form.lastName} onChange={handleChange} type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"/>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"/>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <input name="company" value={form.company} onChange={handleChange} type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                      <select name="companySize" value={form.companySize} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none appearance-none bg-white">
                        <option value="">Select size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="500+">500+ employees</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none appearance-none bg-white">
                      <option value="">Select a subject</option>
                      <option value="demo">Request Demo</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Contact Method</label>
                    <div className="flex space-x-6">
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="contactMethod" value="email" checked={form.contactMethod === 'email'} onChange={handleChange} className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"/>
                        <span className="ml-2 text-gray-700">Email</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="contactMethod" value="phone" checked={form.contactMethod === 'phone'} onChange={handleChange} className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"/>
                        <span className="ml-2 text-gray-700">Phone</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" name="subscribe" checked={form.subscribe} onChange={handleChange} className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"/>
                      <span className="ml-2 text-gray-700">Subscribe to our newsletter for product updates and tips</span>
                    </label>
                  </div>
                  <button type="submit" className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:hello@acmeanalytics.com" className="text-primary-600 hover:text-primary-700">hello@acmeanalytics.com</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+1-555-123-4567" className="text-primary-600 hover:text-primary-700">+1 (555) 123-4567</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Office</p>
                      <p className="text-gray-600">123 Analytics Way<br/>San Francisco, CA 94102</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Looking for support?</h3>
                <p className="text-gray-600 mb-4">Check out our help center for instant answers to common questions.</p>
                <a href="#" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  Visit Help Center
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg bg-white">
                <button onClick={() => toggleFaq(index)} className="w-full text-left px-6 py-4 flex justify-between items-center">
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
