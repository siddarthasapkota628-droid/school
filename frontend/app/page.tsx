import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AdmissionForm } from "@/components/admission-form"
import { SickLeaveForm } from "@/components/sick-leave-form"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import ScrollingNotice from "@/components/sections/scrollingnotice"
import './globals.css'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <ScrollingNotice />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <AdmissionForm />
        <SickLeaveForm />
        <ContactSection />
      </main>
      
    </div>
  )
}
