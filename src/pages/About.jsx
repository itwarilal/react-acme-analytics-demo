import { Link } from 'react-router-dom'

const values = [
  {
    title: 'Customer First',
    description: 'We obsess over our customers success. Every feature we build starts with a customer problem.',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Transparency',
    description: 'We believe in open communication with our team, customers, and stakeholders.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
  },
  {
    title: 'Innovation',
    description: 'We constantly push the boundaries of what analytics platforms can do.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Integrity',
    description: 'We handle your data with the utmost care and always act ethically.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  }
]

const timeline = [
  { year: '2019', title: 'Founded', description: 'Started in a garage with a vision to democratize data analytics.' },
  { year: '2020', title: 'First 100 Customers', description: 'Reached our first milestone and raised Series A funding.' },
  { year: '2021', title: 'Global Expansion', description: 'Opened offices in Europe and Asia, growing to 50 employees.' },
  { year: '2022', title: '500+ Enterprises', description: 'Became the analytics platform of choice for Fortune 500 companies.' },
  { year: '2023', title: 'AI Integration', description: 'Launched our AI-powered insights engine, revolutionizing data analysis.' }
]

const team = [
  { name: 'Alex Johnson', role: 'CEO & Co-founder', initials: 'AJ' },
  { name: 'Sarah Chen', role: 'CTO & Co-founder', initials: 'SC' },
  { name: 'Michael Roberts', role: 'VP of Engineering', initials: 'MR' },
  { name: 'Emily Watson', role: 'VP of Product', initials: 'EW' },
  { name: 'David Kim', role: 'VP of Sales', initials: 'DK' },
  { name: 'Lisa Anderson', role: 'VP of Marketing', initials: 'LA' }
]

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">About Acme Analytics</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            We're on a mission to help every company become data-driven, making powerful analytics accessible to teams of all sizes.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Acme Analytics was founded in 2019 by a team of data engineers and product leaders who were frustrated with the complexity of existing analytics tools.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We believed that understanding your data shouldn't require a PhD in statistics or a team of data scientists. So we built a platform that makes powerful analytics accessible to everyone.
              </p>
              <p className="text-lg text-gray-600">
                Today, we serve over 500 enterprise customers and process more than 10 million events daily, helping teams around the world make better decisions with their data.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">Enterprise Customers</div>
              </div>
              <div className="bg-primary-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="bg-primary-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">$50M</div>
                <div className="text-gray-600">Funding Raised</div>
              </div>
              <div className="bg-primary-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">10M+</div>
                <div className="text-gray-600">Events Daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon}/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in our growth story.</p>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <span className="text-xl font-bold text-primary-600">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mt-1.5 relative">
                  {index < timeline.length - 1 && (
                    <div className="absolute top-4 left-1.5 w-1 h-16 bg-primary-200"></div>
                  )}
                </div>
                <div className="flex-1 pl-8 pb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-gray-600">The team building the future of analytics.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-700 font-bold text-2xl">
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're always looking for talented people who share our mission. Check out our open positions.
          </p>
          <Link to="/contact" className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            View Open Positions
          </Link>
        </div>
      </section>
    </main>
  )
}
