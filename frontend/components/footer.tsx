import Link from "next/link"
import { GraduationCap, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#admissions", label: "Admissions" },
  { href: "#sick-leave", label: "Sick Leave" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="border-t bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div className="lg:col-span-2">
            <Link href="#home" className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  Nijananda Gurukulam
                </span>
                <span className="text-xs opacity-70">
                  Gothatar, Nautandham
                </span>
              </div>
            </Link>
            <p className="mb-4 max-w-md text-sm leading-relaxed opacity-80">
              A premier educational institution dedicated to nurturing young minds 
              with a perfect blend of traditional values and modern education. 
              Building character, inspiring minds, creating leaders.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <address className="flex flex-col gap-2 not-italic text-sm opacity-70">
              <p>Gothatar, Nautandham</p>
              <p>Nepal</p>
              <p className="mt-2">+977-01-XXXXXXX</p>
              <p>info@nijanandagurukulam.edu.np</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-background/20 pt-8 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Nijananda Gurukulam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
