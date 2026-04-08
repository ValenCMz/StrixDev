"use client";

import { Globe, Settings, Zap, ShoppingCart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Presencia Digital",
    description:
      "Landing pages · Webs institucionales · Rediseño · Diseño moderno y optimizado",
  },
  {
    icon: Settings,
    title: "Sistemas de Gestión",
    description: "Turnos · Clientes · Personal · Stock · Soluciones a medida",
  },
  {
    icon: Zap,
    title: "Automatización",
    description:
      "WhatsApp · Emails · Google Sheets · Integraciones · Procesos automáticos",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce",
    description:
      "Tiendas online · Pagos · Integraciones · Automatización de ventas",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-[#F4F6FF] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="Plus Jakarta Sans text-3xl sm:text-4xl text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="Plus Jakarta Sans max-w-2xl mx-auto">
            Ofrecemos soluciones digitales completas para llevar tu negocio al
            siguiente nivel
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                key={service.title}
                className="h-full bg-card border-border shadow-sm hover:shadow-md transition-shadow animate-fade-up gap-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mt-0">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
