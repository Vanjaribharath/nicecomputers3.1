import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Home } from "@/pages/Home";
import { CoursesPage } from "@/pages/Courses";
import { AboutPage } from "@/pages/About";
import { ContactPage } from "@/pages/Contact";
import { BlogPage } from "@/pages/Blog";
import { SEOLandingPage } from "@/pages/seo/SEOLandingPage";
import { NotFound } from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* SEO Landing Pages */}
          <Route path="/computer-institute-navipet" element={<SEOLandingPage slug="computer-institute-navipet" />} />
          <Route path="/computer-training-nizamabad" element={<SEOLandingPage slug="computer-training-nizamabad" />} />
          <Route path="/java-training-nizamabad" element={<SEOLandingPage slug="java-training-nizamabad" />} />
          <Route path="/python-training-navipet" element={<SEOLandingPage slug="python-training-navipet" />} />
          <Route path="/full-stack-course-nizamabad" element={<SEOLandingPage slug="full-stack-course-nizamabad" />} />
          <Route path="/software-training-navipet" element={<SEOLandingPage slug="software-training-navipet" />} />
          <Route path="/computer-classes-basar" element={<SEOLandingPage slug="computer-classes-basar" />} />
          <Route path="/computer-course-bodhan" element={<SEOLandingPage slug="computer-course-bodhan" />} />
          <Route path="/java-full-stack-bhainsa" element={<SEOLandingPage slug="java-full-stack-bhainsa" />} />
          <Route path="/best-computer-institute-nizamabad" element={<SEOLandingPage slug="best-computer-institute-nizamabad" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
      <Toaster richColors position="top-center" />
    </>
  );
}
