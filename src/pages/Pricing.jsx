import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Starter',
    description: 'For small teams getting started',
    priceKey: 'starter',
    features: [
      'Up to 5 team members',
      '100K events/month',
      '5 dashboards',
      '7-day data retention',
      'Email support'
    ],
    cta: 'Start Free Trial',
    highlighted: false
  },
  {
    name: 'Professional',
    description: 'For growing teams',
    priceKey: 'pro',
    features: [
      'Up to 20 team members',
      '1M events/month',
      'Unlimited dashboards',
      '90-day data retention',
      'Priority support',
      'API access'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    priceKey: null,
    features: [
      'Unlimited team members',
      'Unlimited events',
      'Custom data retention',
      'SSO & SAML',
      'Dedicated support',
      'Custom integrations'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
]

const faqs = [
  {
    question: 'Can I change plans later?',
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences."
  },
  {
    question: 'What happens if I exceed my event limit?',
    answer: "We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional event packs. We never cut off your data collection unexpectedly."
  },
  {
    question: 'Do you offer discounts for nonprofits?',
    answer: 'Yes! We offer 50% off for registered nonprofits and educational institutions. Contact our sales team to learn more.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No, there are no setup fees for any plan. You can start your 14-day free trial immediately without providing payment information.'
  }
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const prices = useMemo(() => ({
    starter: isAnnual ? 23 : 29,
    pro: isAnnual ? 79 : 99
  }), [isAnnual])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>
      </section>

      {/* Pricing Toggle & Cards */}
      <section className="py-20 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Billing Toggle */}
          <div className="flex justify-center items-center space-x-4 mb-12">
            <span className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-8 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${isAnnual ? 'bg-primary-600' : 'bg-gray-200'}`}
            >
              <span className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${isAnnual ? 'translate-x-6' : ''}`}></span>
            </button>
            <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual <span className="text-green-600 text-sm">(Save 20%)</span>
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 relative ${
                  plan.highlighted ? 'bg-primary-600 transform scale-105 shadow-xl' : 'bg-white border border-gray-200 hover:shadow-lg transition-shadow'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className={`text-xl font-semibold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                  <p className={`mb-4 ${plan.highlighted ? 'text-primary-200' : 'text-gray-500'}`}>{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    {plan.priceKey ? (
                      <>
                        <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>${prices[plan.priceKey]}</span>
                        <span className={`ml-2 ${plan.highlighted ? 'text-primary-200' : 'text-gray-500'}`}>/month</span>
                      </>
                    ) : (
                      <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>Custom</span>
                    )}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-green-400' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className={plan.highlighted ? 'text-primary-100' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.highlighted ? 'bg-white text-primary-700 hover:bg-primary-50' : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare Plans</h2>
            <p className="text-lg text-gray-600">See what's included in each plan</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary-600 bg-primary-50">Professional</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 text-gray-700">Team Members</td>
                  <td className="text-center py-4 px-4 text-gray-600">5</td>
                  <td className="text-center py-4 px-4 text-gray-600 bg-primary-50/50">20</td>
                  <td className="text-center py-4 px-4 text-gray-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Events per Month</td>
                  <td className="text-center py-4 px-4 text-gray-600">100K</td>
                  <td className="text-center py-4 px-4 text-gray-600 bg-primary-50/50">1M</td>
                  <td className="text-center py-4 px-4 text-gray-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Dashboards</td>
                  <td className="text-center py-4 px-4 text-gray-600">5</td>
                  <td className="text-center py-4 px-4 text-gray-600 bg-primary-50/50">Unlimited</td>
                  <td className="text-center py-4 px-4 text-gray-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Data Retention</td>
                  <td className="text-center py-4 px-4 text-gray-600">7 days</td>
                  <td className="text-center py-4 px-4 text-gray-600 bg-primary-50/50">90 days</td>
                  <td className="text-center py-4 px-4 text-gray-600">Custom</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">API Access</td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4 bg-primary-50/50">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">SSO & SAML</td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4 bg-primary-50/50">
                    <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
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
