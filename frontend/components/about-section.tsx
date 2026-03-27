import { Target, Eye, Clock, Building2, Users, BookOpen, Leaf, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const facilities = [
  {
    icon: Building2,
    title: "Modern Classrooms",
    description: "Well-equipped, spacious classrooms with modern teaching aids",
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "Extensive collection of books and digital resources",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Dedicated teachers committed to student success",
  },
  {
    icon: Leaf,
    title: "Green Campus",
    description: "Eco-friendly environment promoting nature connection",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Our School
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Discover our commitment to excellence in education and holistic development
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-muted-foreground">
                To provide quality education that nurtures intellectual curiosity, 
                moral integrity, and social responsibility. We strive to create an 
                environment where every student can discover their potential and 
                develop skills for lifelong success.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Eye className="h-5 w-5 text-accent" />
                </div>
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-muted-foreground">
                To be a leading educational institution that inspires and empowers 
                students to become compassionate, creative, and responsible global 
                citizens who contribute positively to society and uphold the values 
                of our rich cultural heritage.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* History */}
        <div className="mb-16">
          <Card className="bg-secondary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                Our History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-muted-foreground">
                Nijananda Gurukulam was established with a vision to blend traditional 
                Gurukul-style education with modern academic standards. Located in the 
                serene surroundings of Gothatar, Nautandham, our school has grown to 
                become a beacon of quality education in the region. Over the years, we 
                have nurtured countless students who have gone on to excel in various 
                fields while staying rooted in their cultural values.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Facilities */}
        <div>
          <h3 className="mb-8 text-center text-2xl font-bold text-foreground">
            Our Facilities
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="text-center transition-shadow hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <facility.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="mb-2 font-semibold text-card-foreground">
                    {facility.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
