import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Gothatar, Nautandham", "Nepal"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+977-01-XXXXXXX", "+977-98XXXXXXXX"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@nijanandagurukulam.edu.np", "admissions@nijanandagurukulam.edu.np"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Sunday - Friday", "9:00 AM - 4:00 PM"],
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contact Us
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            {"Have questions? We'd love to hear from you. Reach out to us through any of the following channels."}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Get in Touch
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((item, index) => (
                <Card key={index} className="transition-shadow hover:shadow-md">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-card-foreground">
                        {item.title}
                      </h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Find Us
            </h3>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14126.747034982564!2d85.37!3d27.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19!2sGothatar%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nijananda Gurukulam Location"
                    className="h-full w-full"
                  />
                </div>
              </CardContent>
            </Card>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Located in the peaceful neighborhood of Gothatar, Nautandham
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
