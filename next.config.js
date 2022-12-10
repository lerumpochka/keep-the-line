/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
 dest: 'public'
})

const nextConfig = withPWA({
 // all other next config...
 reactStrictMode: true,
 images: {
   domains: [
     'res.cloudinary.com'
   ]
 }
})

module.exports = nextConfig
