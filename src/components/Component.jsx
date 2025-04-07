import React from "react"

import "./style.css"

export const Component = () => {
    return (
        <div id="webcrumbs">
            <div className=" flex flex-col">
                {/* Header Section */}
                <header className="relative w-full bg-white py-4 shadow-md">
                    <div className="flex items-center justify-between px-6">
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-10 h-10 text-green-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 22C17.5228 22 22 17.5228 22 12 22 12C6.47715 22 2 17.5228 2 12 2 12C2 6.47715 6.47715 2 12 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                />
                                <path d="M12 13V7" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
                            </svg>

                            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                                VAPOR<span className="font-light">WAVES</span>
                            </h1>
                        </div>

                        <nav className="hidden md:flex items-center space-x-8">
                            <a
                                href="https://webcrumbs.cloud/placeholder"
                                className="text-neutral-700 font-medium hover:text-primary-600 transition-colors duration-300"
                            >
                                Home
                            </a>
                            <a
                                href="https://webcrumbs.cloud/placeholder"
                                className="text-neutral-700 font-medium hover:text-primary-600 transition-colors duration-300"
                            >
                                Shop
                            </a>
                            <a
                                href="https://webcrumbs.cloud/placeholder"
                                className="text-gray-700 font-medium hover:text-purple-600 transition-colors duration-300"
                            >
                                Collections
                            </a>
                            <a
                                href="https://webcrumbs.cloud/placeholder"
                                className="text-neutral-700 font-medium hover:text-green-600 transition-colors duration-300"
                            >
                                About Us
                            </a>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <button className="relative p-2 text-neutral-700 hover:text-green-600 transition-colors duration-300">
                                <span className="material-symbols-outlined">search</span>
                            </button>
                            <button className="relative p-2 text-neutral-700 hover:text-green-600 transition-colors duration-300">
                                <span className="material-symbols-outlined">person</span>
                            </button>
                            <button className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors duration-300">
                                <span className="material-symbols-outlined">shopping_cart</span>
                                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    3
                                </span>
                            </button>
                            <button className="md:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors duration-300">
                                <span className="material-symbols-outlined">menu</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Hero Section with Smoke Effect */}
                <section className="relative w-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-green-900 overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-20">
                        {/* Animated smoke effect using multiple layered SVGs */}
                        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <filter id="smoke">
                                    <feTurbulence baseFrequency="0.01" numOctaves="3" seed="3">
                                        <animate
                                            attributeName="baseFrequency"
                                            dur="120s"
                                            values="0.01;0.02;0.01"
                                            repeatCount="indefinite"
                                        />
                                    </feTurbulence>
                                    <feDisplacementMap in="SourceGraphic" scale="170" />
                                </filter>
                            </defs>
                            <rect
                                width="100%"
                                height="100%"
                                filter="url(https://webcrumbs.cloud/placeholder)"
                                fill="url(https://webcrumbs.cloud/placeholder)"
                            />
                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#primary-500" stopOpacity="0.5" />
                                <stop offset="50%" stopColor="#primary-300" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#e0e7ff" stopOpacity="0.5" />
                            </linearGradient>
                        </svg>
                    </div>

                    <div className="relative z-10 px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                Premium Vaping Experience
                            </h2>
                            <p className="text-lg text-gray-500 mb-8">
                                Discover our exclusive collection of high-quality vaping products designed for the
                                ultimate satisfaction.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-green-200">
                                    Shop Now
                                </button>
                                <button className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transform hover:-translate-y-1 transition-all duration-300">
                                    New Collections
                                </button>
                            </div>
                        </div>

                        <div className="md:w-1/2 relative">
                            <div className="relative w-full h-80 md:h-96">
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-green-800/20 to-green-700/20 rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1560373517-a1a7b290ad5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Premium Vape Device"
                                    className="absolute top-4 left-4 right-4 bottom-4 object-cover rounded-xl shadow-2xl hover:shadow-purple-300/50 transform hover:-translate-y-2 transition-all duration-500"
                                />
                                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-xl transform hover:rotate-3 hover:scale-105 transition-all duration-300">
                                    <p className="text-sm font-medium text-neutral-500">New Release</p>
                                    <p className="text-xl font-bold text-gray-800">Crystal Pro</p>
                                    <p className="text-primary-600 font-bold">$89.99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Products */}
                <section className="w-full py-16 bg-white">
                    <div className="px-6">
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
                            <a
                                href="https://webcrumbs.cloud/placeholder"
                                className="flex items-center text-green-500 hover:text-green-400 transition-colors duration-300 group"
                            >
                                View all
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300 ml-1">
                                    arrow_forward
                                </span>
                            </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Product 1 */}
                            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute top-3 left-3 z-10 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        Best Seller
                                    </div>
                                    <img
                                        src="https://images.unsplash.com/photo-1562007908-17c67e878c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                                        alt="Premium Vape Starter Kit"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center mb-2">
                                        <div className="flex text-yellow-400">
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="material-symbols-outlined text-sm">star_half</span>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-2">(128)</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-neutral-200 mb-1">Ethereal Mini</h3>
                                    <p className="text-sm text-gray-500 mb-4">
                                        Compact starter kit with three power modes
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg font-bold text-primary-600">$42.99</p>
                                        <button className="bg-gray-100 hover:bg-purple-600 hover:text-white p-2 rounded-full transition-colors duration-300">
                                            <span className="material-symbols-outlined">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product 2 */}
                            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute top-3 left-3 z-10 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        New
                                    </div>
                                    <img
                                        src="https://images.unsplash.com/photo-1595134608550-222ccd5a8833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                                        alt="Premium E-Liquid"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center mb-2">
                                        <div className="flex text-yellow-400">
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="material-symbols-outlined text-sm">star</span>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-2">(94)</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-neutral-200 mb-1">Aurora E-Liquid</h3>
                                    <p className="text-sm text-gray-500 mb-4">Blueberry menthol flavor, 30ml bottle</p>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg font-bold text-green-500">$19.99</p>
                                        <button className="bg-gray-100 hover:bg-purple-600 hover:text-white p-2 rounded-full transition-colors duration-300">
                                            <span className="material-symbols-outlined">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product 3 */}
                            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute top-3 left-3 z-10 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        Sale
                                    </div>
                                    <img
                                        src="https://images.unsplash.com/photo-1614309458918-c0f5d759de0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                                        alt="Luxury Vape Pod System"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center mb-2">
                                        <div className="flex text-yellow-400">
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="material-symbols-outlined text-sm">star_outline</span>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-2">(67)</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-1">Prism Pod System</h3>
                                    <p className="text-sm text-gray-500 mb-4">Elegant design with replaceable coils</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-2">
                                            <p className="text-lg font-bold text-primary-600">$36.99</p>
                                            <p className="text-sm line-through text-neutral-400">$49.99</p>
                                        </div>
                                        <button className="bg-neutral-800 hover:bg-green-600 hover:text-white p-2 rounded-full transition-colors duration-300">
                                            <span className="material-symbols-outlined">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product 4 */}
                            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1529374814797-de52885a0249?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                                        alt="Premium Accessory Kit"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center mb-2">
                                        <div className="flex text-yellow-400">
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="material-symbols-outlined text-sm">star_half</span>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-2">(42)</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-neutral-200 mb-1">Accessory Kit Pro</h3>
                                    <p className="text-sm text-gray-500 mb-4">Complete maintenance and cleaning set</p>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg font-bold text-green-500">$24.99</p>
                                        <button className="bg-neutral-800 hover:bg-green-600 hover:text-white p-2 rounded-full transition-colors duration-300">
                                            <span className="material-symbols-outlined">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Banner Section */}
                <section className="w-full py-10 relative overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-10">
                        {/* Animated smoke effect backdrop */}
                        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <filter id="smoke2">
                                    <feTurbulence baseFrequency="0.015" numOctaves="3" seed="5">
                                        <animate
                                            attributeName="baseFrequency"
                                            dur="90s"
                                            values="0.015;0.025;0.015"
                                            repeatCount="indefinite"
                                        />
                                    </feTurbulence>
                                    <feDisplacementMap in="SourceGraphic" scale="120" />
                                </filter>
                            </defs>
                            <rect
                                width="100%"
                                height="100%"
                                filter="url(https://webcrumbs.cloud/placeholder)"
                                fill="url(https://webcrumbs.cloud/placeholder)"
                            />
                            <linearGradient id="iridescent" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.7" />
                                <stop offset="33%" stopColor="#60a5fa" stopOpacity="0.5" />
                                <stop offset="66%" stopColor="#e879f9" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#primary-200" stopOpacity="0.7" />
                            </linearGradient>
                        </svg>
                    </div>

                    <div className="relative z-10 px-6 py-16">
                        <div className="bg-white/70 backdrop-blur-md rounded-2xl p-10 max-w-4xl mx-auto shadow-xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-200 mb-6">
                                Join Our Loyalty Program
                            </h2>
                            <p className="text-lg text-center text-gray-600 mb-8">
                                Subscribe to our newsletter and get exclusive offers, early access to new releases, and
                                loyalty points on every purchase.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 max-w-xl mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow px-6 py-3 rounded-lg sm:rounded-r-none border border-green-700 bg-neutral-800 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                />
                                <button className="bg-gradient-to-r from-primary-600 to-primary-600 text-white px-6 py-3 rounded-lg sm:rounded-l-none font-medium hover:from-primary-700 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-primary-200">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="w-full py-16 bg-white">
                    <div className="px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Shop By Category</h2>
                        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                            Explore our wide range of premium products designed to meet all your vaping needs.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Category 1 */}
                            <div className="relative rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/80 z-10"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                    alt="Vape Devices"
                                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <h3 className="text-xl font-bold text-white mb-2">Vape Devices</h3>
                                    <p className="text-gray-200 mb-4">Premium quality devices for every style</p>
                                    <a
                                        href="https://webcrumbs.cloud/placeholder"
                                        className="inline-block text-green-400 border-b border-green-400 pb-1 transform group-hover:translate-x-2 transition-transform duration-300"
                                    >
                                        Explore Collection
                                    </a>
                                </div>
                            </div>

                            {/* Category 2 */}
                            <div className="relative rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/80 z-10"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1577593980495-6e7f67824497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                    alt="E-Liquids"
                                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <h3 className="text-xl font-bold text-white mb-2">E-Liquids</h3>
                                    <p className="text-gray-200 mb-4">Variety of flavors for every taste</p>
                                    <a
                                        href="https://webcrumbs.cloud/placeholder"
                                        className="inline-block text-white border-b border-white pb-1 transform group-hover:translate-x-2 transition-transform duration-300"
                                    >
                                        Explore Collection
                                    </a>
                                </div>
                            </div>

                            {/* Category 3 */}
                            <div className="relative rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/80 z-10"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1567447616342-ce894c9f1dea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                    alt="Accessories"
                                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <h3 className="text-xl font-bold text-white mb-2">Accessories</h3>
                                    <p className="text-gray-200 mb-4">Essential tools and components</p>
                                    <a
                                        href="https://webcrumbs.cloud/placeholder"
                                        className="inline-block text-green-400 border-b border-green-400 pb-1 transform group-hover:translate-x-2 transition-transform duration-300"
                                    >
                                        Explore Collection
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Next: "Add testimonials section with customer reviews" */}
                {/* Next: "Add floating 'Age Verification' modal for legal compliance" */}
                {/* Next: "Add footer with company information, social media links, and legal information" */}
            </div>
        </div>
    )
}
