import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$12",
      description: "Perfect for new freelancers",
      features: [
        "5 active clients",
        "10 projects",
        "Unlimited invoices",
        "Basic reporting",
        "Email support",
      ],
      popular: false,
      buttonText: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "$29",
      description: "For growing freelance businesses",
      features: [
        "Unlimited clients",
        "Unlimited projects",
        "Custom invoice branding",
        "Client portal access",
        "Time tracking",
        "Contract templates",
        "Priority support",
      ],
      popular: true,
      buttonText: "Start Free Trial",
    },
    {
      name: "Agency",
      price: "$49",
      description: "For teams and agencies",
      features: [
        "Everything in Professional",
        "Team collaboration",
        "Team member accounts",
        "Advanced permissions",
        "White-label client portal",
        "API access",
        "Dedicated account manager",
      ],
      popular: false,
      buttonText: "Contact Sales",
    },
  ];

  return (
    <section className="py-16 px-6" id="pricing">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Choose the plan that fits your freelance business needs. All plans
          include a 14-day free trial.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              className={`p-6 rounded-md ${
                plan.popular ? "bg-blue-900/20" : "/60"
              } h-full flex flex-col`}
              key={plan.name}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full self-start mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-blue-400 mr-2 shrink-0" />
                    <span className="">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "default" : "outline"}
                
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
