import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Real-time Dashboards',
    description: 'Create beautiful, interactive dashboards that update in real-time. Drag-and-drop interface makes it easy to build custom views.',
    category: 'analytics',
    badge: 'New',
    gradient: 'from-primary-500 to-primary-700',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  },
  {
    id: 2,
    name: 'AI Insights',
    description: 'Let AI analyze your data and surface the most important trends, anomalies, and opportunities automatically.',
    category: 'analytics',
    badge: 'Popular',
    badgeColor: 'green',
    gradient: 'from-purple-500 to-purple-700',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    id: 3,
    name: 'Automated Workflows',
    description: 'Build automated workflows triggered by data events. Send alerts, update systems, and take action without manual intervention.',
    category: 'automation',
    gradient: 'from-green-500 to-green-700',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
  },
  {
    id: 4,
    name: 'Data Pipeline',
    description: 'Connect all your data sources with our ETL pipeline. Transform, clean, and load data from 150+ integrations.',
    category: 'integrations',
    gradient: 'from-orange-500 to-orange-700',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
  },
  {
    id: 5,
    name: 'Scheduled Reports',
    description: 'Generate and distribute reports automatically. Schedule daily, weekly, or monthly reports delivered to stakeholders.',
    category: 'automation',
    gradient: 'from-pink-500 to-pink-700',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    id: 6,
    name: 'REST API',
    description: 'Full programmatic access to your data. Build custom applications, embed charts, and create unique experiences.',
    category: 'integrations',
    gradient: 'from-cyan-500 to-cyan-700',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
  }
]

const tabs = [
  { id: 'all', label: 'All Products' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'automation', label: 'Automation' },
  { id: 'integrations', label: 'Integrations' }
]

const detailTabs = [
  { id: 'features', label: 'Features' },
  { id: 'usecases', label: 'Use Cases' },
  { id: 'technical', label: 'Technical' }
]

const getCategoryColor = (category) => {
  const colors = {
    analytics: 'text-primary-600 bg-primary-50',
    automation: 'text-green-600 bg-green-50',
    integrations: 'text-orange-600 bg-orange-50'
  }
  return colors[category] || 'text-gray-600 bg-gray-50'
}

export default function Products() {
  const [activeTab, setActiveTab] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [activeDetailTab, setActiveDetailTab] = useState('features')

  const filteredProducts = useMemo(() => {
    if (activeTab === 'all') return products
    return products.filter(p => p.category === activeTab)
  }, [activeTab])

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Our Products</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            A complete suite of analytics tools designed to help you understand your data and make smarter decisions.
          </p>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">{filteredProducts.length} products</p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest First</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg">
                <div className={`h-48 bg-gradient-to-br flex items-center justify-center ${product.gradient}`}>
                  <svg className="w-20 h-20 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={product.icon}/>
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${getCategoryColor(product.category)}`}>
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
                    {product.badge && (
                      <span className={`text-xs font-medium ${product.badgeColor === 'green' ? 'text-green-600' : 'text-gray-500'}`}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <a href="#" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Detail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Featured Product</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">AI-Powered Insights</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI engine continuously analyzes your data to surface the most important insights. No more manual exploration - let AI do the heavy lifting.
              </p>

              <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                  {detailTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveDetailTab(tab.id)}
                      className={`pb-4 border-b-2 font-medium ${
                        activeDetailTab === tab.id ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {activeDetailTab === 'features' && (
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Anomaly Detection</span>
                      <p className="text-gray-600 text-sm">Automatically detect unusual patterns and outliers in your data.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Trend Forecasting</span>
                      <p className="text-gray-600 text-sm">Predict future trends based on historical data patterns.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Natural Language Queries</span>
                      <p className="text-gray-600 text-sm">Ask questions in plain English and get instant answers.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeDetailTab === 'usecases' && (
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold text-sm mr-3 mt-0.5 flex-shrink-0">1</span>
                    <div>
                      <span className="font-medium text-gray-900">Revenue Optimization</span>
                      <p className="text-gray-600 text-sm">Identify pricing opportunities and revenue leaks automatically.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold text-sm mr-3 mt-0.5 flex-shrink-0">2</span>
                    <div>
                      <span className="font-medium text-gray-900">Customer Churn Prediction</span>
                      <p className="text-gray-600 text-sm">Predict which customers are likely to churn and take action.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold text-sm mr-3 mt-0.5 flex-shrink-0">3</span>
                    <div>
                      <span className="font-medium text-gray-900">Fraud Detection</span>
                      <p className="text-gray-600 text-sm">Detect fraudulent transactions in real-time.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeDetailTab === 'technical' && (
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Model Architecture</span>
                      <p className="text-gray-600 text-sm">Built on transformer-based models optimized for time-series data.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Privacy-First</span>
                      <p className="text-gray-600 text-sm">All analysis runs on your data in isolation. No data sharing.</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8">
                <Link to="/contact" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  Try AI Insights Free
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-gray-900">AI Insights Dashboard</h4>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Live</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Anomaly Detected</p>
                        <p className="text-sm text-gray-500">Revenue dropped 23% in APAC region</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Trend Identified</p>
                        <p className="text-sm text-gray-500">Mobile traffic up 45% week-over-week</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Recommendation</p>
                        <p className="text-sm text-gray-500">Increase ad spend on weekend campaigns</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Try any of our products free for 14 days. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg">
              Start Free Trial
            </Link>
            <Link to="/pricing" className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
