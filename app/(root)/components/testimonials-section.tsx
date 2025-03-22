import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Graphic Designer",
      quote:
        "ClientBridge has completely transformed how I manage my freelance business. I've reduced my admin time by 70% and never miss an invoice deadline now.",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "Michael Chen",
      role: "Web Developer",
      quote:
        "The client portal feature is a game-changer. My clients love being able to track project progress and approve work directly in the platform.",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "Emma Rodriguez",
      role: "Content Writer",
      quote:
        "I used to dread sending invoices and tracking payments. Now it's automated and I get paid faster. ClientBridge paid for itself in the first month.",
      avatar: "/placeholder.svg?height=64&width=64",
    },
  ]

  return (
    <section className="py-16 px-6 /50" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Trusted by Freelancers Worldwide</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Join thousands of freelancers who have streamlined their business operations with ClientBridge.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
              <div className="p-6 /60 h-full flex flex-col" key={testimonial.name}>
                <div className="mb-4 text-blue-400">{"★".repeat(5)}</div>
                <p className=" mb-6 flex-grow">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}

