/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  MessageCircle, 
  Menu, 
  X,
  Send,
  ShieldCheck,
  UserCheck,
  Timer,
  Globe,
  Zap,
  Award,
  Search,
  CheckSquare,
  FileText,
  Shield,
  CreditCard,
  Truck,
  Construction,
  Box,
  ArrowUpCircle,
  Settings,
  Maximize,
  ClipboardList
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface Equipment {
  id: number;
  name: string;
  image: string;
}

interface ProcessStep {
  id: number;
  title: string;
  icon: React.ReactNode;
}

interface Differential {
  id: number;
  title: string;
  icon: React.ReactNode;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    id: 1,
    title: "Izaje con Grúas Telescópicas",
    description: "Operaciones de izaje de alta precisión con los quipos adecuados para cargas pesadas.",
    image: "/img/grua.webp",
    icon: <Construction className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Camión Grúa",
    description: "Versatilidad y potencia para el transporte e izaje de materiales en un solo equipo.",
    image: "/img/camion-grua.webp",
    icon: <Truck className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Transporte en Cama Baja",
    description: "Traslado de maquinaria pesada y sobredimensionada a nivel nacional con seguridad.",
    image: "/img/camabaja.webp",
    icon: <Box className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Montacargas",
    description: "Soluciones eficientes para el movimiento de carga en almacenes y proyectos industriales.",
    image: "/img/montacargas.webp",
    icon: <Settings className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Canastilla para Trabajos en Altura",
    description: "Equipos certificados para garantizar la seguridad del personal en labores elevadas.",
    image: "/img/canastilla.webp",
    icon: <ArrowUpCircle className="w-6 h-6" />
  },
  {
    id: 6,
    title: "Mini Cargador",
    description: "Maquinaria compacta y potente para espacios reducidos y movimiento de tierras.",
    image: "/img/minicargador.webp",
    icon: <Maximize className="w-6 h-6" />
  },
  {
    id: 7,
    title: "Plataforma Elevadora de Tijeras",
    description: "Estabilidad y alcance vertical para mantenimientos e instalaciones industriales.",
    image: "/img/elevador.webp",
    icon: <ArrowUpCircle className="w-6 h-6" />
  },
  {
    id: 8,
    title: "Evaluación Técnica Previa",
    description: "Visitas de campo y planeamiento de ingeniería para asegurar el éxito de cada maniobra.",
    image: "/img/inspeccion.webp",
    icon: <ClipboardList className="w-6 h-6" />
  }
];

const PROCESS_STEPS: ProcessStep[] = [
  { id: 1, title: "Inspección", icon: <Search className="w-8 h-8" /> },
  { id: 2, title: "Viabilidad", icon: <CheckSquare className="w-8 h-8" /> },
  { id: 3, title: "Cotización", icon: <FileText className="w-8 h-8" /> },
  { id: 4, title: "Seguridad", icon: <Shield className="w-8 h-8" /> },
  { id: 5, title: "Facturación", icon: <CreditCard className="w-8 h-8" /> }
];

const EQUIPMENTS: Equipment[] = [
  { id: 1, name: "Grúa Telescópica", image: "/img/grua.webp" },
  { id: 2, name: "Camión Grúa", image: "/img/camion-grua.webp" },
  { id: 3, name: "Cama Baja", image: "/img/camabaja.webp" },
  { id: 4, name: "Montacargas", image: "/img/montacargas.webp" },
  { id: 5, name: "Mini Cargador", image: "/img/minicargador.webp" },
  { id: 6, name: "Elevadora de Tijeras", image: "/img/elevador.webp" }
];

const DIFFERENTIALS: Differential[] = [
  { id: 1, title: "Seguridad Operativa", icon: <ShieldCheck className="w-10 h-10" /> },
  { id: 2, title: "Técnicos Expertos", icon: <UserCheck className="w-10 h-10" /> },
  { id: 3, title: "Puntualidad", icon: <Timer className="w-10 h-10" /> },
  { id: 4, title: "Cobertura Nacional", icon: <Globe className="w-10 h-10" /> },
  { id: 5, title: "Respuesta Rápida", icon: <Zap className="w-10 h-10" /> },
  { id: 6, title: "Equipos Certificados", icon: <Award className="w-10 h-10" /> }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { id: 'como-trabajamos', name: 'Cómo Trabajamos', href: '#como-trabajamos' },
    { name: 'Equipos', href: '#equipos' },
    { name: 'Nosotros', href: '#por-que-elegirnos' },
    { name: 'Cotización', href: '#cotizacion' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo Placeholder */}
            <div className="flex items-center gap-2">
              <img src="/img/logo.webp" alt="GRUPESA" className="h-10 w-auto" />
              <span className="text-2xl font-display font-bold tracking-tighter text-brand-dark">GRUPESA</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-brand-red transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#cotizacion"
              className="bg-brand-red text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-500/20"
            >
              Solicitar Cotización
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-red p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-brand-red hover:bg-gray-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 z-0">
        <img 
          src="/img/fondo.webp" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/70 via-brand-dark/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 bg-brand-red/10 text-brand-red border border-brand-red/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Líderes en Izaje Industrial
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6">
            Potencia y Precisión <br />
            <span className="text-brand-red">en cada Elevación</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            Especialistas en soluciones integrales de izaje, transporte pesado y alquiler de equipos certificados para los proyectos más exigentes del Perú.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#servicios" 
              className="bg-brand-red text-white px-8 py-4 rounded-full font-bold text-center hover:bg-red-700 transition-all flex items-center justify-center gap-2 group"
            >
              Nuestros Servicios
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#equipos" 
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-center hover:bg-white/20 transition-all"
            >
              Ver Equipos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-dark mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de izaje industrial, transporte pesado y equipos especializados para proyectos de construcción en todo el Perú.
          </p>
        </div>

        <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-8 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[85vw] sm:min-w-0 snap-center group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-brand-red text-white rounded-xl flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all sm:opacity-0">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 sm:block">
                  <div className="sm:hidden text-brand-red">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-red transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section id="como-trabajamos" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-extrabold text-brand-dark mb-4">Cómo Trabajamos</h2>
          <p className="text-gray-600">Un proceso estructurado para garantizar la máxima seguridad y eficiencia.</p>
        </div>

        <div className="relative">
          <div className="timeline-line"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-white border-2 border-brand-red rounded-full flex items-center justify-center text-brand-red mb-6 shadow-lg shadow-red-500/10 relative z-10 hover:bg-brand-red hover:text-white transition-all cursor-default">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-dark text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                    0{step.id}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-brand-dark">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EquipmentSection = () => {
  return (
    <section id="equipos" className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4">Equipos Disponibles</h2>
            <p className="text-gray-400">Contamos con una flota moderna y diversificada para cubrir cualquier necesidad logística e industrial.</p>
          </div>
          <a href="#cotizacion" className="text-brand-red font-bold flex items-center gap-2 hover:underline">
            Ver especificaciones técnicas <ChevronRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EQUIPMENTS.map((eq, index) => (
            <motion.div
              key={eq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img 
                src={eq.image} 
                alt={eq.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold mb-2">{eq.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUsSection = () => {
  return (
    <section id="por-que-elegirnos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-extrabold text-brand-dark mb-4">¿Por qué elegirnos?</h2>
          <p className="text-gray-600">Nuestra experiencia y compromiso nos avalan como socios estratégicos.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {DIFFERENTIALS.map((diff, index) => (
            <motion.div
              key={diff.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <div className="text-brand-red mb-4">
                {diff.icon}
              </div>
              <h3 className="text-sm font-bold text-brand-dark leading-tight">{diff.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-brand-red relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-8">
          ¿Listo para elevar tu proyecto al siguiente nivel?
        </h2>
        <a 
          href="#cotizacion" 
          className="inline-flex items-center gap-3 bg-white text-brand-red px-10 py-5 rounded-full font-black text-lg hover:bg-brand-dark hover:text-white transition-all shadow-2xl"
        >
          Solicitar Cotización Ahora
          <Send size={20} />
        </a>
      </div>
    </section>
  );
};

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    empresa: '',
    contacto: '',
    telefono: '',
    correo: '',
    servicio: '',
    ubicacion: '',
    fecha: '',
    descripcion: ''
  });

const handleSubmit = (e) => {
  e.preventDefault();

  // 🔥 Evento de conversión Google Ads
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17980073436/2sCpCIed1f8bENzLyP1C'
    });
  }

  console.log('Form submitted:', formData);

  // 📩 Construcción del correo
  const subject = `Cotización: ${formData.servicio} - ${formData.empresa}`;
  const body = `
Empresa: ${formData.empresa}
Contacto: ${formData.contacto}
Teléfono: ${formData.telefono}
Correo: ${formData.correo}
Servicio: ${formData.servicio}
Ubicación: ${formData.ubicacion}
Fecha: ${formData.fecha}
Descripción: ${formData.descripcion}
  `.trim();

  // 📧 Abrir cliente de correo
  window.location.href = `mailto:gruasytransportepesadoperu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  alert('Gracias por su interés. Se abrió su correo para enviar la solicitud.');
};

  return (
    <section id="cotizacion" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-display font-extrabold text-brand-dark mb-4">Formulario de Cotización</h2>
              <p className="text-gray-600">Complete los datos y un especialista técnico lo contactará en menos de 24 horas.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Empresa</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all"
                  placeholder="Nombre de la empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Persona de contacto</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all"
                  placeholder="Nombre completo"
                  value={formData.contacto}
                  onChange={(e) => setFormData({...formData, contacto: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Teléfono</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all"
                  placeholder="+51 999 999 999"
                  value={formData.telefono}
                  onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Correo electrónico</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all"
                  placeholder="ejemplo@empresa.com"
                  value={formData.correo}
                  onChange={(e) => setFormData({...formData, correo: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Tipo de servicio</label>
                <select 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all bg-white"
                  value={formData.servicio}
                  onChange={(e) => setFormData({...formData, servicio: e.target.value})}
                >
                  <option value="">Seleccione un servicio</option>
                  {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Ubicación del proyecto</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all"
                  placeholder="Ciudad / Distrito"
                  value={formData.ubicacion}
                  onChange={(e) => setFormData({...formData, ubicacion: e.target.value})}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Fecha requerida</label>
                <input 
                  type="date" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all"
                  value={formData.fecha}
                  onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Descripción técnica (Máx. 500 caracteres)</label>
                <textarea 
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all resize-none"
                  placeholder="Detalles de la carga, peso, altura, etc."
                  value={formData.descripcion}
                  onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button 
                  type="submit"
                  className="w-full bg-brand-red text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-red-500/30"
                >
                  Enviar Solicitud
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/img/logo.webp" alt="GRUPESA Logo" className="h-10 w-auto" />
              <span className="text-2xl font-display font-bold tracking-tighter">GRUPESA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluciones integrales de izaje y transporte pesado con los más altos estándares de seguridad y calidad en el Perú.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-white/50 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#servicios" className="hover:text-brand-red transition-colors">Nuestros Servicios</a></li>
              <li><a href="#equipos" className="hover:text-brand-red transition-colors">Equipos Disponibles</a></li>
              <li><a href="#por-que-elegirnos" className="hover:text-brand-red transition-colors">¿Por qué elegirnos?</a></li>
              <li><a href="#cotizacion" className="hover:text-brand-red transition-colors">Solicitar Cotización</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-red shrink-0" />
                <span>+51 960 657 438</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-red shrink-0" />
                <span>gruasytransportepesadoperu@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-red shrink-0" />
                <span>Av Yurumayo Lote 2B - San Martin de Porres</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Horario de Atención</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-brand-red shrink-0" />
                <span>Lunes a Viernes: 08:00 - 18:00 <br /> Sábados: 08:00 - 13:00</span>
              </li>
              <li className="text-brand-red font-bold">Atención de Emergencias 24/7</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} GRUPESA S.A.C. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const MEASUREMENT_ID = "G-Y7DWWWTMBG";

function trackEvent(name: string, params: Record<string, any>) {
  // Evita error si aún no cargó gtag
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", name, {
      send_to: MEASUREMENT_ID,
      ...params,
    });
  }
}

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* BOTÓN LLAMADA */}
      <a
        href="tel:+51960657438"
        onClick={() =>
          trackEvent("click_llamada", {
            event_category: "contacto",
            event_label: "telefono_24_7",
          })
        }
        className="w-16 h-16 bg-brand-red text-white rounded-full flex flex-col items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
      >
        <Phone size={24} />
        <span className="text-[10px] font-bold leading-none mt-1">24/7</span>
        <span className="absolute right-full mr-4 bg-white text-brand-dark px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
          Llamar ahora 24/7
        </span>
      </a>

      {/* BOTÓN WHATSAPP */}
      <a
        href="https://wa.me/51960657438"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent("click_whatsapp", {
            event_category: "contacto",
            event_label: "whatsapp_flotante",
          })
        }
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute right-full mr-4 bg-white text-brand-dark px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
          ¿Necesitas ayuda? ¡Contáctanos!
        </span>
      </a>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <ProcessSection />
        <EquipmentSection />
        <WhyUsSection />
        <CTASection />
        <QuotationForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
