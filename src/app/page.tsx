import Footer from "@/components/Footer";
import About from "@/components/HomePage/About";
import Introduction from "@/components/HomePage/Introduction";
import Projects from "@/components/HomePage/Projects";
import Skills from "@/components/HomePage/Skills";


export const metadata = {
  title: "Muzamil Abbas - Portfolio",
  description: "Welcome to my portfolio website! I'm Muzamil Abbas, a passionate software developer specializing in web development and mobile app development. Explore my projects, skills, and experience as you navigate through my portfolio.",
  keywords: ["Muzamil Abbas", "Portfolio", "Software Developer", "Web Development", "Mobile App Development", "Projects", "Skills", "Experience"],
  authors: [{ name: 'Muzamil Abbas', url: 'https://muzamilabbas.com' }],
  creator: 'Muzamil Abbas',
  publisher: 'Muzamil Abbas',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Muzamil Abbas - Portfolio",
    description: "Welcome to my portfolio website! I'm Muzamil Abbas, a passionate software developer specializing in web development and mobile app development. Explore my projects, skills, and experience as you navigate through my portfolio.",
    url: 'https://muzamilabbas.com',
    siteName: 'Muzamil Abbas Portfolio',
    images: [
      {
        url: 'https://muzamilabbas.com/og-image.png',
        width: 800,
        height: 600,
        alt: 'Muzamil Abbas Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Muzamil Abbas - Portfolio",
    description: "Welcome to my portfolio website! I'm Muzamil Abbas, a passionate software developer specializing in web development and mobile app development. Explore my projects, skills, and experience as you navigate through my portfolio.",
    images: ['https://muzamilabbas.com/twitter-image.png'],
    creator: '@muzamilabbas',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// Enable static generation for maximum performance
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour
export default function Home() {
  return (
    <div className="container mx-auto bg-[url('/bg.png')] bg-no-repeat bg-cover">
      <Introduction />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}
