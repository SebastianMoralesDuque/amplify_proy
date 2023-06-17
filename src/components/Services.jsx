import React from 'react';

function Services() {
  const servicesData = [
    {
      title: 'Venta de Frutas Frescas',
      description: 'Ofrecemos una amplia variedad de frutas frescas y de calidad, directamente desde los mejores productores locales.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Verduras Orgánicas',
      description: 'Proporcionamos una selección de verduras orgánicas cultivadas sin el uso de pesticidas o químicos dañinos.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Canastas de Frutas y Verduras',
      description: 'Creamos canastas personalizadas con una combinación de frutas y verduras frescas, ideales para una alimentación saludable.',
      icon: 'fas fa-shopping-basket'
    },
    {
      title: 'Asesoramiento Nutricional',
      description: 'Contamos con especialistas en nutrición que pueden brindarte asesoramiento personalizado para una alimentación equilibrada.',
      icon: 'fas fa-heart'
    },
    {
      title: 'Recetas Saludables',
      description: 'Compartimos recetas saludables y deliciosas para que puedas aprovechar al máximo tus frutas y verduras.',
      icon: 'fas fa-book'
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Nuestros Servicios de Verduras y Frutas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div className="bg-white rounded-lg p-6 flex items-center" key={index}>
              <div className="rounded-full bg-blue-500 text-white p-3 mr-4">
                <i className={`text-2xl ${service.icon}`}></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
