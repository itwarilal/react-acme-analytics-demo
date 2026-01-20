import { useState } from 'react'
import { Link } from 'react-router-dom'

const tabs = [
  { id: 'profile', label: 'Profile' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'security', label: 'Security' },
  { id: 'billing', label: 'Billing' },
  { id: 'data', label: 'Data & Privacy' }
]

const sidebarLinks = [
  { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', label: 'Dashboard' },
  { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', label: 'Analytics' },
  { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', label: 'Reports' },
  { icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', label: 'Team' },
  { icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z', label: 'Integrations' }
]

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile')
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@acme.com',
    jobTitle: 'Product Manager',
    timezone: 'pst',
    theme: 'light'
  })
  const [refreshRate, setRefreshRate] = useState(30)
  const [notifications, setNotifications] = useState({
    weeklyDigest: true,
    alertEmails: true,
    productUpdates: false,
    channels: {
      email: true,
      slack: true,
      sms: false
    }
  })
  const [security, setSecurity] = useState({
    twoFactor: false
  })
  const [privacy, setPrivacy] = useState({
    analytics: true,
    marketing: false
  })

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const toggleNotification = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const toggleChannel = (key) => {
    setNotifications(prev => ({
      ...prev,
      channels: { ...prev.channels, [key]: !prev.channels[key] }
    }))
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full overflow-y-auto">
        <div className="p-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">Acme Analytics</span>
          </Link>
        </div>
        <nav className="px-4 space-y-1">
          {sidebarLinks.map((link) => (
            <a key={link.label} href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon}/>
              </svg>
              <span>{link.label}</span>
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-gray-200">
            <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-primary-50 text-primary-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span className="font-medium">Settings</span>
            </a>
          </div>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-semibold">JD</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
              <p className="text-xs text-gray-500 truncate">john@acme.com</p>
            </div>
            <Link to="/" className="p-2 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
              </svg>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
              <p className="text-sm text-gray-500">Manage your account settings and preferences</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Settings Content */}
        <div className="p-8">
          {/* Settings Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 border-b-2 font-medium ${
                    activeTab === tab.id ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Basic Information</h3>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input name="firstName" value={profile.firstName} onChange={handleProfileChange} type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"/>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input name="lastName" value={profile.lastName} onChange={handleProfileChange} type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"/>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input name="email" value={profile.email} onChange={handleProfileChange} type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                      <input name="jobTitle" value={profile.jobTitle} onChange={handleProfileChange} type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                      <select name="timezone" value={profile.timezone} onChange={handleProfileChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none appearance-none bg-white">
                        <option value="pst">Pacific Time (PT)</option>
                        <option value="mst">Mountain Time (MT)</option>
                        <option value="cst">Central Time (CT)</option>
                        <option value="est">Eastern Time (ET)</option>
                        <option value="utc">UTC</option>
                        <option value="gmt">GMT</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end">
                    <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Display Preferences</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Theme</label>
                      <div className="flex space-x-4">
                        {['light', 'dark', 'system'].map((theme) => (
                          <label key={theme} className="flex items-center cursor-pointer">
                            <input type="radio" name="theme" value={theme} checked={profile.theme === theme} onChange={handleProfileChange} className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"/>
                            <span className="ml-2 text-gray-700 capitalize">{theme}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Dashboard Refresh Rate</label>
                      <div className="flex items-center space-x-4">
                        <input type="range" min="5" max="60" value={refreshRate} onChange={(e) => setRefreshRate(Number(e.target.value))} className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"/>
                        <span className="text-sm text-gray-600 w-16">{refreshRate} sec</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">How often dashboards automatically refresh</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Photo</h3>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-3xl mb-4">JD</div>
                    <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Upload new photo</button>
                    <p className="text-xs text-gray-500 mt-2">JPG, GIF or PNG. Max size 2MB</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Usage</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">API Calls</span>
                        <span className="text-gray-900 font-medium">45,231 / 100,000</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Storage Used</span>
                        <span className="text-gray-900 font-medium">2.4 GB / 10 GB</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '24%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Team Members</span>
                        <span className="text-gray-900 font-medium">8 / 20</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '40%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-3xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Email Notifications</h4>
                  <div className="space-y-4">
                    {[
                      { key: 'weeklyDigest', label: 'Weekly digest', desc: 'Get a weekly summary of your analytics' },
                      { key: 'alertEmails', label: 'Alert notifications', desc: 'Receive emails when alerts are triggered' },
                      { key: 'productUpdates', label: 'Product updates', desc: 'News about new features and improvements' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-900">{item.label}</p>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                        <button onClick={() => toggleNotification(item.key)} className={`toggle-switch ${notifications[item.key] ? 'active' : ''}`}>
                          <span className="toggle-dot"></span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-medium text-gray-900 mb-4">Alert Channels</h4>
                  <p className="text-sm text-gray-500 mb-4">Choose where to receive critical alerts</p>
                  <div className="space-y-3">
                    {['email', 'slack', 'sms'].map((channel) => (
                      <label key={channel} className="flex items-center cursor-pointer">
                        <input type="checkbox" checked={notifications.channels[channel]} onChange={() => toggleChannel(channel)} className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"/>
                        <span className="ml-3 text-gray-700 capitalize">{channel}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end">
                <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-8 max-w-3xl">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Change Password</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                    <input type="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input type="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                    <input type="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"/>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                    Update Password
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <button onClick={() => setSecurity(prev => ({...prev, twoFactor: !prev.twoFactor}))} className={`toggle-switch ${security.twoFactor ? 'active' : ''}`}>
                    <span className="toggle-dot"></span>
                  </button>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex">
                    <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                    <p className="ml-3 text-sm text-yellow-700">Two-factor authentication is not enabled. Enable it to add an extra layer of security.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <div className="max-w-3xl">
              <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Current Plan</h3>
                    <p className="text-sm text-gray-500">You are currently on the Professional plan</p>
                  </div>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Professional</span>
                </div>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">Next billing date: February 15, 2024</p>
                <div className="flex space-x-4">
                  <Link to="/pricing" className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                    Upgrade Plan
                  </Link>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Cancel Subscription
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment Method</h3>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
                    <div>
                      <p className="font-medium text-gray-900">Visa ending in 4242</p>
                      <p className="text-sm text-gray-500">Expires 12/2025</p>
                    </div>
                  </div>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Edit</button>
                </div>
              </div>
            </div>
          )}

          {/* Data & Privacy Tab */}
          {activeTab === 'data' && (
            <div className="space-y-8 max-w-3xl">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Data Management</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Export your data</p>
                      <p className="text-sm text-gray-500">Download a copy of all your data in JSON format</p>
                    </div>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      Export Data
                    </button>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Data retention period</p>
                        <p className="text-sm text-gray-500">How long we keep your historical data</p>
                      </div>
                      <span className="text-gray-900 font-medium">90 days</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Privacy Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900">Usage analytics</p>
                      <p className="text-sm text-gray-500">Help us improve by sharing anonymous usage data</p>
                    </div>
                    <button onClick={() => setPrivacy(prev => ({...prev, analytics: !prev.analytics}))} className={`toggle-switch ${privacy.analytics ? 'active' : ''}`}>
                      <span className="toggle-dot"></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900">Marketing cookies</p>
                      <p className="text-sm text-gray-500">Allow third-party marketing cookies</p>
                    </div>
                    <button onClick={() => setPrivacy(prev => ({...prev, marketing: !prev.marketing}))} className={`toggle-switch ${privacy.marketing ? 'active' : ''}`}>
                      <span className="toggle-dot"></span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl border border-red-200 p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Danger Zone</h3>
                <p className="text-sm text-red-600 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
