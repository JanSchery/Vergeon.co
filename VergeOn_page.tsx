import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">VergeOn</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">Innovating Software Solutions</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
            Contact Us
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-4 py-16 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-card-foreground">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-card-foreground leading-relaxed mb-6 text-pretty">
                VergeOn is a forward-thinking software solutions company based in Slovakia. We specialize in creating
                modern, efficient, and scalable digital solutions for businesses of all sizes. Our goal is to help
                companies streamline their operations and unlock new opportunities through innovative software.
              </p>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Soblahov 27, 913 38, Slovakia</span>
                </div>
                <p className="text-sm">Owned and managed by Jan Schery</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">V</span>
                  </div>
                  <p className="text-muted-foreground">VergeOn Logo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Custom Software Development",
                description:
                  "Tailored software solutions designed to meet your specific business requirements and goals.",
              },
              {
                title: "Web & Mobile Applications",
                description:
                  "Modern, responsive web applications and mobile apps that deliver exceptional user experiences.",
              },
              {
                title: "IT Consulting & System Integration",
                description: "Expert guidance on technology strategy and seamless integration of existing systems.",
              },
              {
                title: "Cloud-Based Solutions",
                description: "Scalable cloud infrastructure and applications that grow with your business needs.",
              },
            ].map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-card-foreground">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Name
                  </label>
                  <Input id="name" type="text" placeholder="Your name" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="w-full" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your project..." rows={5} className="w-full" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                  Ready to transform your business with innovative software solutions? We'd love to hear from you and
                  discuss how we can help achieve your goals.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">info@vergeon.co</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-card-foreground">Soblahov 27</p>
                    <p className="text-card-foreground">913 38, Slovakia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 VergeOn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
