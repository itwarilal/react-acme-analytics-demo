import { useState, useMemo } from 'react'

const categories = [
  { id: 'all', label: 'All Posts' },
  { id: 'tutorials', label: 'Tutorials' },
  { id: 'product', label: 'Product Updates' },
  { id: 'insights', label: 'Industry Insights' },
  { id: 'company', label: 'Company News' }
]

const posts = [
  {
    id: 1,
    title: 'Getting Started with Real-time Analytics',
    excerpt: 'Learn how to set up your first real-time dashboard and start tracking key metrics in minutes.',
    category: 'tutorials',
    author: 'Sarah Chen',
    authorInitials: 'SC',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
    featured: true
  },
  {
    id: 2,
    title: 'Introducing AI-Powered Insights',
    excerpt: 'Our new AI engine automatically surfaces the most important trends and anomalies in your data.',
    category: 'product',
    author: 'Alex Johnson',
    authorInitials: 'AJ',
    date: 'Jan 12, 2024',
    readTime: '3 min read'
  },
  {
    id: 3,
    title: 'The Future of Data-Driven Decision Making',
    excerpt: 'How leading companies are using analytics to stay ahead of the competition.',
    category: 'insights',
    author: 'Michael Roberts',
    authorInitials: 'MR',
    date: 'Jan 10, 2024',
    readTime: '8 min read'
  },
  {
    id: 4,
    title: 'Building Custom Dashboards: A Complete Guide',
    excerpt: 'Everything you need to know about creating powerful, customized dashboards for your team.',
    category: 'tutorials',
    author: 'Emily Watson',
    authorInitials: 'EW',
    date: 'Jan 8, 2024',
    readTime: '10 min read'
  },
  {
    id: 5,
    title: 'Acme Analytics Raises $30M Series B',
    excerpt: "We're excited to announce our Series B funding to accelerate product development and expansion.",
    category: 'company',
    author: 'Alex Johnson',
    authorInitials: 'AJ',
    date: 'Jan 5, 2024',
    readTime: '4 min read'
  },
  {
    id: 6,
    title: '10 Analytics Trends to Watch in 2024',
    excerpt: 'From AI-powered insights to real-time collaboration, here are the trends shaping the industry.',
    category: 'insights',
    author: 'Lisa Anderson',
    authorInitials: 'LA',
    date: 'Jan 2, 2024',
    readTime: '7 min read'
  }
]

const getCategoryLabel = (categoryId) => {
  const category = categories.find(c => c.id === categoryId)
  return category ? category.label : categoryId
}

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const filteredPosts = useMemo(() => {
    let result = posts
    if (activeFilter !== 'all') {
      result = result.filter(p => p.category === activeFilter)
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query)
      )
    }
    return result
  }, [activeFilter, searchQuery])

  const featuredPost = posts.find(p => p.featured)

  const subscribeNewsletter = (e) => {
    e.preventDefault()
    alert('Thank you for subscribing!')
    setNewsletterEmail('')
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Blog</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Insights, tutorials, and updates from the Acme Analytics team.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                    activeFilter === cat.id ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeFilter === 'all' && !searchQuery && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Featured</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="text-primary-100 text-lg mb-6 max-w-2xl">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-semibold">
                    {featuredPost.authorInitials}
                  </div>
                  <div>
                    <p className="font-medium">{featuredPost.author}</p>
                    <p className="text-primary-200 text-sm">{featuredPost.date} · {featuredPost.readTime}</p>
                  </div>
                </div>
                <a href="#" className="inline-flex items-center bg-white text-primary-700 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                  Read Article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(p => !p.featured || activeFilter !== 'all' || searchQuery).map((post) => (
              <article key={post.id} className="blog-card bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      {getCategoryLabel(post.category)}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-semibold text-sm">
                        {post.authorInitials}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 text-gray-400 cursor-not-allowed">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium">1</button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium">2</button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium">3</button>
              <button className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest insights and tutorials delivered to your inbox weekly.
          </p>
          <form onSubmit={subscribeNewsletter} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            />
            <button type="submit" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
