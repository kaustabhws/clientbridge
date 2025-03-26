import { Button } from "@/components/ui/button"
import { InteractiveGrid } from "./interactive-grid" 

export function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <InteractiveGrid containerClassName="absolute inset-0" className="opacity-20" points={20} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Freelance Business?</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of freelancers who have simplified their workflow, impressed clients, and gotten paid faster
          with ClientBridge.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Start Your 14-Day Free Trial
          </Button>
          <Button variant="outline" size="lg">
            Schedule a Demo
          </Button>
        </div>
        <p className="text-gray-500 mt-6 text-sm">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  )
}

