import { GradientCard } from "./gradient-card";
import {
  Clock,
  CreditCard,
  Users,
  BarChart3,
  Calendar,
  FileText,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Client Management",
      description:
        "Organize client information, communication history, and project details in one place",
      icon: <Users className="w-10 h-10 text-blue-400 mb-4" />,
    },
    {
      title: "Time Tracking",
      description:
        "Track billable hours with ease and generate detailed reports for clients",
      icon: <Clock className="w-10 h-10 text-purple-400 mb-4" />,
    },
    {
      title: "Professional Invoicing",
      description:
        "Create and send branded invoices with multiple payment options",
      icon: <CreditCard className="w-10 h-10 text-blue-400 mb-4" />,
    },
    {
      title: "Project Management",
      description:
        "Set milestones, track progress, and manage deliverables efficiently",
      icon: <Calendar className="w-10 h-10 text-purple-400 mb-4" />,
    },
    {
      title: "Financial Reports",
      description:
        "Get insights into your business with detailed financial analytics",
      icon: <BarChart3 className="w-10 h-10 text-blue-400 mb-4" />,
    },
    {
      title: "Contract Templates",
      description:
        "Access legally-vetted contract templates customized for freelancers",
      icon: <FileText className="w-10 h-10 text-purple-400 mb-4" />,
    },
  ];

  return (
    <section className="py-16 px-6" id="features">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text dark:text-transparent bg-gradient-to-b dark:from-white dark:to-white/60">
          Everything Freelancers Need
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          ClientBridge combines all the tools you need to run your freelance
          business professionally, from client management to invoicing and
          everything in between.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <GradientCard key={feature.title}>
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="dark:text-gray-400 text-neutral-600">{feature.description}</p>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
}
