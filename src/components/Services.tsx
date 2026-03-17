"use client";

import { Globe, Settings, Zap, ShoppingCart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Negocio Digital",
    description:
      "Landing pages · Webs institucionales · Rediseño de webs · Diseño web",
  },
  {
    icon: Settings,
    title: "Sistemas para Negocios",
    description: "Gestores de turnos, personal, stock y más",
  },
  {
    icon: Zap,
    title: "Automatización",
    description:
      "Leads automáticos a WhatsApp · Google Sheets · Emails y recordatorios automáticos · Integración entre sistemas",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce",
    description: "Tiendas online completas y optimizadas",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones digitales completas para llevar tu negocio al
            siguiente nivel
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-card border-border shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
