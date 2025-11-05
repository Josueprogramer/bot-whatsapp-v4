import { addKeyword, EVENTS } from "@builderbot/bot";

// Flujo principal: menú
const servicioFlow = addKeyword([EVENTS.WELCOME])
    .addAnswer('¡Hola! 🌟 Escribe una palabra clave para continuar:')
    .addAnswer(`Opciones disponibles:
- Escribe *1* 🏢📐 para diseño y planos .
- Escribe *2* 🧱🏡 para Licencia de construccion y demolicion.
- Escribe *3* 🚪🔑 Para Cotizar un departamento.
- Escribe *4* 💼👔 para Cotizar una oficina.
- Escribe *5* 🏕️🗺️ para adquirir un Terreno
- Escribe *6* 📢📝 para mas servicios
`);

// Flujo para servicios
const planoFlow = addKeyword(['1'])
    .addAnswer('Creamos planos precisos y personalizados para tu proyecto 🏡🏢. ¡Lleva tus ideas del papel a la realidad!',
      {
        media:"./assets/WhatsApp Video.mp4"
      }
    );
    

// Flujo para productos
const construccionFlow = addKeyword(['2'])
    .addAnswer('🏗️ ¡Tramita tu Licencia de Construcción en Puno con nosotros! 🏡 En nuestra empresa te ayudamos a gestionar toda la documentación necesaria para tu licencia, incluyendo:📐 Planos de arquitectura🏢 Planos de estructuras🚰 Instalaciones sanitarias💡 Instalaciones eléctricasAsegura tu proyecto con profesionales y evita complicaciones.📞 Contáctanos al +51 904 236 095 y empecemos a construir tus sueños. 💪✨',
      {
        media:"./assets/imagen seccion 1.jpeg"
      }
    );
    

// Flujo para contacto
const estructuralFlow = addKeyword(['3'])
    .addAnswer('🏙️ ¡Vive frente al Lago Titicaca en el corazón de Puno! 🌅Descubre nuestros exclusivos departamentos de 2 y 3 habitaciones, diseñados para ofrecerte confort, elegancia y una vista inigualable al lago.Disfruta de la comodidad de estar en el centro de la ciudad, cerca de todo lo que necesitas, con acabados modernos y espacios pensados para tu bienestar. 🏡✨',
      {
        media:"./assets/imagen 3.jpeg"
      }
    );

// Flujo para web
const LevantamientoFlow = addKeyword(['4'])
    .addAnswer('🏢 ¡Tu próxima oficina te espera en el centro de Puno! 💼Espacios modernos, funcionales y listos para adaptarse a tu negocio. Solicita hoy tu cotización personalizada y encuentra el lugar ideal para crecer. 📞✨',
      {
        media:"./assets/video para op 4.mp4"
      }
    );
const SunarpFlow = addKeyword(['5'])
    .addAnswer('adquiero un terreno',
      {
        media:"./assets/imagen5.jpeg"
      }
  );

const masFlow = addKeyword(['6'])
    .addAnswer('Conoce todo lo que ofrecemos 🛠️🏗️. Te compartimos nuestro brochure 📘 para que explores cada opción.',
      {
        media:"./assets/Brochure Montes de Oca.pdf"
      }
    );

export {
  servicioFlow,
  planoFlow,
  construccionFlow,
  estructuralFlow,
  LevantamientoFlow,
  SunarpFlow,
  masFlow
    
};
