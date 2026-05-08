import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import cmsDashboard from "@/assets/dashboard-mockup.png";
import player from "@/assets/android-media-player.jpg";
import valencia from "@/assets/1valencia.png";
import square from "@/assets/2squaree.png";
import one from "@/assets/3one.png";
import window from "@/assets/4window.png";
import eco from "@/assets/5eco.png";
import lite from "@/assets/6lite.png";
import cube from "@/assets/7cubee.png";
import crew from "@/assets/8crew.png";
import posh from "@/assets/9posh.png";
import eye from "@/assets/10eeyee.png";
import touch from "@/assets/11touch.png";
import epaperDisplay from "@/assets/epaper-display.png";
import tabletWallView from "@/assets/12wall.png";
import tabletPortrait from "@/assets/12portrait.png";
import tabletAngle from "@/assets/12angle.png";
import tabletPlane from "@/assets/12plane.png";
import tubeImg from "@/assets/12tube.png";

const catalogItems = [
  {
    src: valencia,
    alt: "Tótem Valencia",
    title: "Tótem Valencia",
    description:
      "Tótem exterior es una herramienta útil, versátil y efectiva para comunicarte con tus clientes y potenciar tu marca creando un impacto positivo.",
    sizeClass: "md:max-w-[480px] aspect-[4/5]",
  },
  {
    src: square,
    alt: "Tótem Square",
    title: "Tótem Square",
    description:
      "Tótem portapantallas realizado con estructura perimetral soldada a base rectangular de acero. Acabado lacado en color a elegir.",
    sizeClass: "md:max-w-[460px] aspect-[4/5]",
  },
  {
    src: one,
    alt: "Tótem One",
    title: "Tótem One",
    description:
      "Totem de interior diseñado para facilitar la comunicación con los usuarios en lugares concurridos, generando una experiencia positiva con tu marca.",
    sizeClass: "md:max-w-[420px] aspect-[3/4]",
  },
  {
    src: window,
    alt: "Tótem Window",
    title: "Tótem Window",
    description:
      "Soporte de suelo compacto para monitores pequeños, con espacio para integrar un ordenador. Su diseño elegante y versátil se adapta fácilmente a distintos entornos, destacando por su sencillez y originalidad.",
    sizeClass: "md:max-w-[480px] aspect-[4/5]",
  },
  {
    src: eco,
    alt: "Tótem Square Lite Eco",
    title: "Tótem Square Lite Eco",
    description:
      "Tótem sostenible fabricado con materiales reciclados, equivalente a unas 75 botellas de plástico, que combina diseño y responsabilidad ambiental. Incorpora panel acústico para mejorar el sonido y se produce con energía solar, reduciendo las emisiones a cero y ofreciendo una solución elegante y ecológica para cualquier espacio.",
    sizeClass: "md:max-w-[420px] aspect-[3/4]",
  },
  {
    src: lite,
    alt: "Tótem Square Lite",
    title: "Tótem Square Lite",
    description:
      "Tótem elegante y tecnológico, fabricado en España con estructura de acero y aluminio que garantiza durabilidad y un acabado de alta calidad. Su diseño minimalista y su rendimiento lo convierten en una pieza distintiva que combina innovación, estilo y excelencia en cada detalle.",
    sizeClass: "md:max-w-[520px] aspect-[4/5]",
  },
  {
    src: cube,
    alt: "Kiosko Cube",
    title: "Kiosko Cube",
    description:
      'Atril portapantallas de hasta 17" realizado con estructura en plancha de aluminio conformado y lacado. Trasera en plancha de aluminio con apertura frontal mediante bisagras y cerradura. Base de aluminio con cantos redondeados soldada al cuerpo central.',
    sizeClass: "md:max-w-[400px] aspect-[3/4]",
  },
  {
    src: crew,
    alt: "Kiosko Crew",
    title: "Kiosko Crew",
    description:
      "Soporte de suelo compacto para monitores de pequeño tamaño, con espacio para integrar un ordenador. Destaca por su diseño versátil, elegante y sencillo, adaptándose fácilmente a entornos como conferencias, exposiciones o zonas de paso.",
    sizeClass: "md:max-w-[400px] aspect-[3/4]",
  },
  {
    src: posh,
    alt: "Kiosko Posh",
    title: "Kiosko Posh",
    description:
      'Atril versátil y elegante diseñado para una interacción visual intuitiva, adaptable en formato horizontal o vertical. Compacto y funcional, permite integrar pantallas de 32" a 55", siendo ideal para espacios como entradas, zonas de espera o áreas comerciales.',
    sizeClass: "md:max-w-[460px] aspect-square",
  },
  {
    src: eye,
    alt: "Kiosko Eye",
    title: "Kiosko Eye",
    description:
      "Atril para monitores de gran tamaño. Su diseño permite una experiencia óptima para todos los públicos. Ideal para espacios amplios donde el usuario necesite consultar información básica como aeropuertos, halls, ayuntamientos,...",
    sizeClass: "md:max-w-[460px] aspect-[4/5]",
  },
  {
    src: touch,
    alt: "Kiosko Touch",
    title: "Kiosko Touch",
    description:
      "Kiosco de suelo con pantalla inclinada para mejorar la visibilidad y la interacción. Robusto, estable y versátil, permite integrar periféricos y adaptarse a múltiples usos como gestión de turnos o consulta de servicios.",
    sizeClass: "md:max-w-[460px] aspect-[4/5]",
  },
];

const DigitalSignageSection = () => (
  <section id="digital-signage" className="py-12 md:py-16 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Digital Signage</h2>
        </div>
      </ScrollReveal>

      {/* Intro block */}
      <ScrollReveal delay={0.1}>
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Soluciones personalizadas que consiguen acercar tu marca a los usuarios de forma fácil y sencilla, creando
            una experiencia única.
          </p>
        </div>
      </ScrollReveal>

      {/* Catálogo: filas alternadas imagen + texto */}
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-20 mb-20">
        {catalogItems.map((item, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <ScrollReveal key={i} delay={0.05}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div
                  className={`relative rounded-2xl overflow-hidden shadow-2xl w-full ${item.sizeClass} mx-auto ${
                    imageLeft ? "md:order-1" : "md:order-2"
                  }`}
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </motion.div>

                <div className={imageLeft ? "md:order-2" : "md:order-1"}>
                  <span className="inline-block text-xs uppercase tracking-[0.25em] text-accent font-bold mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* ──────── Sección Tablets ──────── */}
      <ScrollReveal>
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex justify-center my-4">
            <div className="glow-line" />
          </div>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
              12
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">Tablets</h2>
          </div>

          {/* Grid tablets + Tube */}
<div className="flex flex-col md:flex-row gap-3 max-w-2xl mx-auto">

  {/* Grid 2x2 — celdas que se estiran */}
  <div className="grid grid-cols-2 gap-2.5 md:gap-3 flex-1">
    {[
      { src: tabletWallView, label: "Wall View" },
      { src: tabletPortrait, label: "Portrait" },
      { src: tabletAngle, label: "Angle" },
      { src: tabletPlane, label: "Plane" },
    ].map((tab) => (
      <motion.div
        key={tab.label}
        className="relative rounded-lg overflow-hidden bg-muted/10 aspect-[4/3]"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={tab.src}
          alt={`Tablet ${tab.label}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute bottom-2 left-2 text-white font-semibold text-[10px] md:text-[11px] tracking-wide drop-shadow-lg">
          {tab.label}
        </span>
      </motion.div>
    ))}
  </div>

  {/* Tube — imagen completa visible, mismo alto que el grid */}
  <motion.div
    className="relative rounded-lg overflow-hidden bg-muted/20 w-full md:w-[200px] flex-shrink-0 aspect-[4/3] md:aspect-auto"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <img
      src={tubeImg}
      alt="Tablet Tube"
      className="absolute inset-0 w-full h-full object-contain"
      loading="lazy"
    />
    <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/30 to-transparent" />
    <span className="absolute bottom-2 left-2 text-white font-semibold text-[10px] md:text-[11px] tracking-wide drop-shadow-lg">
      Tube
    </span>
  </motion.div>

</div>
        </div>
      </ScrollReveal>

      
    </div>
  </section>
);

export default DigitalSignageSection;
