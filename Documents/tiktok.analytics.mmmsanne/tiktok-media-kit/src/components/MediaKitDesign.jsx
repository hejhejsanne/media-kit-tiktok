import React from "react";

const MediaKitDesign = () => {
  return (
    <div className="flex flex-col items-center w-full p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Media Kit - Sanne Delin
      </h1>

      {/* Cover Page */}
      <div className="w-full max-w-3xl mb-12 shadow-lg">
        <div className="bg-pink-50 p-6 rounded-t-lg border-t border-l border-r border-gray-200">
          <div className="bg-white rounded-lg shadow-md p-6 mb-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 to-red-400"></div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-32 h-32 rounded-full bg-pink-100 border-4 border-white shadow-md flex-shrink-0 mb-4 md:mb-0 md:mr-6 overflow-hidden">
                <img
                  src="/profile.png"
                  alt="Sanne Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-800">@mmmsanne</h1>
                <p className="text-lg text-gray-600 mt-1">
                  Food & ASMR Content Creator
                </p>
                <p className="text-gray-500 mt-1">Sweden 🇸🇪</p>

                <div className="flex flex-wrap justify-center md:justify-start mt-4 gap-3">
                  <div className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                    Food
                  </div>
                  <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    ASMR
                  </div>
                  <div className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium">
                    Lifestyle
                  </div>
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    Programming
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audience Insights Page - Combined with all three time periods */}
      <div className="w-full max-w-3xl mb-12 shadow-lg">
        <div className="bg-blue-50 p-6 rounded-t-lg border-t border-l border-r border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-center">
            Audience Insights Page
          </h2>

          {/* 368 Days Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-bold mb-4 text-center text-gray-700">
              Audience & Performance (last 368 days)
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">37.2K</h4>
                <p className="text-sm text-gray-600">Followers</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">1.6M</h4>
                <p className="text-sm text-gray-600">Total Likes</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">15M</h4>
                <p className="text-sm text-gray-600">Total Views</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">5.9M</h4>
                <p className="text-sm text-gray-600">Top Video Views</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">63.4%</h4>
                <p className="text-sm text-gray-600">FYP Discovery</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">289K</h4>
                <p className="text-sm text-gray-600">Weekly Views</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-2">
                Content Performance
              </h4>
              <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-pink-500 h-full rounded-full"
                  style={{ width: "82%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>Engagement</span>
                <span>82%</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">
                  Age Demographics
                </h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>18-24</span>
                      <span>45%</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-2 mt-1 overflow-hidden">
                      <div
                        className="bg-blue-400 h-full rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>25-34</span>
                      <span>35%</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-2 mt-1 overflow-hidden">
                      <div
                        className="bg-blue-400 h-full rounded-full"
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>35-44</span>
                      <span>15%</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-2 mt-1 overflow-hidden">
                      <div
                        className="bg-blue-400 h-full rounded-full"
                        style={{ width: "15%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-2">
                  Gender Demographics
                </h4>
                <div className="flex items-center justify-center h-32">
                  <div className="relative w-32 h-32">
                    {/* Cirkel-segmenten */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Bakgrundscirkel */}

                      {/* Kvinnligt segment - 75% (270 grader) */}
                      <path
                        d="M50,50 L50,0 A50,50 0 1,1 0,50 L50,50 Z"
                        fill="#F9A8D4"
                      />

                      {/* Manligt segment - 25% (90 grader) */}
                      <path
                        d="M50,50 L0,50 A50,50 0 0,1 50,0 L50,50 Z"
                        fill="#BFDBFE"
                      />

                      {/* Inre cirkel för kontrast */}
                      <circle
                        cx="50"
                        cy="50"
                        r="25"
                        fill="white"
                        stroke="#E5E7EB"
                        strokeWidth="1"
                      />

                      {/* Kvinnligt label */}
                      <text
                        x="50"
                        y="45"
                        textAnchor="middle"
                        fontSize="10"
                        fontWeight="bold"
                      >
                        75% F
                      </text>

                      {/* Manligt label */}
                      <text
                        x="50"
                        y="60"
                        textAnchor="middle"
                        fontSize="10"
                        fontWeight="bold"
                      >
                        25% M
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 60 Days Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-bold mb-4 text-center text-gray-700">
              Audience & Performance (last 60 days)
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">37.2K</h4>
                <p className="text-sm text-gray-600">Followers</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">51K</h4>
                <p className="text-sm text-gray-600">Likes (Period)</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">1.7M</h4>
                <p className="text-sm text-gray-600">Video Views</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">112K+</h4>
                <p className="text-sm text-gray-600">Peak Daily Views</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">63.4%</h4>
                <p className="text-sm text-gray-600">FYP Discovery</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">1.7K</h4>
                <p className="text-sm text-gray-600">Comments</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-2">
                Content Performance
              </h4>
              <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-pink-500 h-full rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>Engagement</span>
                <span>78%</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">
                  Traffic Sources
                </h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>For You Page</span>
                      <span>63.4%</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-2 mt-1 overflow-hidden">
                      <div
                        className="bg-blue-400 h-full rounded-full"
                        style={{ width: "63.4%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Search</span>
                      <span>24%</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-2 mt-1 overflow-hidden">
                      <div
                        className="bg-blue-400 h-full rounded-full"
                        style={{ width: "24%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Profile</span>
                      <span>11.6%</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-2 mt-1 overflow-hidden">
                      <div
                        className="bg-blue-400 h-full rounded-full"
                        style={{ width: "11.6%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-2">
                  Growth Indicators
                </h4>
                <div className="space-y-3">
                  <div className="bg-green-50 rounded p-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-700">
                        Profile Views
                      </span>
                      <span className="text-xs font-medium text-green-600">
                        +691 (1.4%)
                      </span>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded p-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-700">Comments</span>
                      <span className="text-xs font-medium text-green-600">
                        +320 (23.5%)
                      </span>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded p-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-700">Shares</span>
                      <span className="text-xs font-medium text-green-600">
                        +149 (6.1%)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 28 Days Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4 text-center text-gray-700">
              Audience & Performance (last 28 days)
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">37.2K</h4>
                <p className="text-sm text-gray-600">Followers</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">23K</h4>
                <p className="text-sm text-gray-600">Likes (Period)</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">800K</h4>
                <p className="text-sm text-gray-600">Video Views</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">112K+</h4>
                <p className="text-sm text-gray-600">Peak Daily Views</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">63.4%</h4>
                <p className="text-sm text-gray-600">FYP Discovery</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-500">778</h4>
                <p className="text-sm text-gray-600">Comments</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-2">
                Content Performance
              </h4>
              <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-pink-500 h-full rounded-full"
                  style={{ width: "76%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>Engagement</span>
                <span>76%</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">
                  Traffic Sources
                </h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>For You Page</span>
                      <span>63.4%</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-2 mt-1 overflow-hidden">
                      <div
                        className="bg-blue-400 h-full rounded-full"
                        style={{ width: "63.4%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Search</span>
                      <span>24%</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-2 mt-1 overflow-hidden">
                      <div
                        className="bg-blue-400 h-full rounded-full"
                        style={{ width: "24%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Profile</span>
                      <span>11.6%</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-2 mt-1 overflow-hidden">
                      <div
                        className="bg-blue-400 h-full rounded-full"
                        style={{ width: "11.6%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-2">
                  Growth Indicators
                </h4>
                <div className="space-y-3">
                  <div className="bg-green-50 rounded p-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-700">
                        Profile Views
                      </span>
                      <span className="text-xs font-medium text-green-600">
                        +1,174 (11.0%)
                      </span>
                    </div>
                  </div>
                  <div className="bg-red-50 rounded p-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-700">Likes</span>
                      <span className="text-xs font-medium text-red-600">
                        -701 (-3.0%)
                      </span>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded p-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-700">Comments</span>
                      <span className="text-xs font-medium text-green-600">
                        +10 (1.3%)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration Rates Page */}
      <div className="w-full max-w-3xl mb-12 shadow-lg">
        <div className="bg-purple-50 p-6 rounded-t-lg border-t border-l border-r border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-center">
            Collaboration Rates Page
          </h2>

          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h3 className="text-lg font-bold mb-6 text-center text-gray-700">
              Collaboration Packages
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-pink-100 p-4 text-center">
                  <h4 className="font-bold text-pink-600">Standard</h4>
                </div>
                <div className="p-4">
                  <p className="text-center font-bold text-xl mb-4">
                    6,500 SEK
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>1 TikTok Video</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Creative Direction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Performance Report</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-2 border-pink-400 rounded-lg overflow-hidden shadow-md relative">
                <div className="absolute top-0 right-0">
                  <div className="bg-pink-500 text-white text-xs py-1 px-3 rounded-bl-lg">
                    POPULAR
                  </div>
                </div>
                <div className="bg-pink-400 p-4 text-center">
                  <h4 className="font-bold text-white">Premium</h4>
                </div>
                <div className="p-4">
                  <p className="text-center font-bold text-xl mb-4">
                    8,000 SEK
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>1 TikTok Video</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Creative Direction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Performance Report</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Spark Ads Usage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Exclusivity (7 days)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-purple-100 p-4 text-center">
                  <h4 className="font-bold text-purple-600">Series</h4>
                </div>
                <div className="p-4">
                  <p className="text-center font-bold text-xl mb-4">
                    21,000 SEK
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>3 TikTok Videos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Creative Direction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Performance Report</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Spark Ads Usage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Exclusivity (14 days)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Bonus: Story Content</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-3">
                Additional Services
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                For additional services such as Extended Usage Rights,
                Whitelisting, Script Revisions, or Rush Fee, please get in touch
                so we can establish a mutually agreeable price and arrangement.
              </p>
              <div className="mt-2 text-sm italic text-gray-500">
                Contact me at: mmmsanne@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Past Campaigns Page */}
      <div className="w-full max-w-3xl mb-8 shadow-lg">
        <div className="bg-green-50 p-6 rounded-t-lg border-t border-l border-r border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-center">
            Past Successes Page
          </h2>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-6 text-center text-gray-700">
              Content Highlights
            </h3>

            {/* Grid container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* Sushi Video */}

              <a
                href="https://www.tiktok.com/@mmmsanne/video/7351855378608557345?lang=sv-SE"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-md"
              >
                <div className="h-40 bg-pink-200 flex items-center justify-center">
                  <span className="text-pink-500 font-medium">Sushi</span>
                </div>
                <div className="p-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Views</span>
                    <span>5.7M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Engagement</span>
                    <span>8.2%</span>
                  </div>
                </div>
              </a>

              {/* New Sushi Place */}

              <a
                href="https://www.tiktok.com/@mmmsanne/video/7227056977468214555?lang=sv-SE"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-md"
              >
                <div className="h-40 bg-pink-200 flex items-center justify-center">
                  <span className="text-pink-500 font-medium">
                    New Sushi Place
                  </span>
                </div>
                <div className="p-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Views</span>
                    <span>5.9M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Engagement</span>
                    <span>7.8%</span>
                  </div>
                </div>
              </a>

              {/* Dubai Chocolate */}

              <a
                href="https://www.tiktok.com/@mmmsanne/video/7501945663526145302?lang=sv-SE"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-md"
              >
                <div className="h-40 bg-pink-200 flex items-center justify-center">
                  <span className="text-pink-500 font-medium">
                    Dubai Chocolate from Normal
                  </span>
                </div>
                <div className="p-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Views</span>
                    <span>78.4K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Engagement</span>
                    <span>6.9%</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-500 mt-8 text-center max-w-xl">
        This media kit was created to showcase my audience insights and
        collaboration options. Feel free to reach out to discuss potential
        partnerships at mmmsanne@gmail.com.
      </div>
    </div>
  );
};

export default MediaKitDesign;
