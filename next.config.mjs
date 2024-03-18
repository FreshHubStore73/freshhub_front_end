/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
                port: '',
            },
            {
                protocol: 'http',
                hostname: 'gmg38118-001-site1.jtempurl.com',
                port: '',
            },
        ],
    },
    env: {
        SERV_URL: process.env.SERV_URL,
    },
};

export default nextConfig;
