import React from 'react';

function Contact() {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
            <p className="text-gray-700 mb-2"><i className="fas fa-map-marker-alt mr-2"></i>Dirección: Calle Principal, Ciudad, País</p>
            <p className="text-gray-700 mb-2"><i className="fas fa-phone-alt mr-2"></i>Teléfono: +1234567890</p>
            <p className="text-gray-700 mb-2"><i className="fas fa-envelope mr-2"></i>Email: info@tupagina.com</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Formulario de Contacto</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2" htmlFor="name">Nombre</label>
                <input className="border border-gray-400 rounded-md py-2 px-3 w-full" type="text" id="name" name="name" placeholder="Ingresa tu nombre" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2" htmlFor="email">Email</label>
                <input className="border border-gray-400 rounded-md py-2 px-3 w-full" type="email" id="email" name="email" placeholder="Ingresa tu email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2" htmlFor="message">Mensaje</label>
                <textarea className="border border-gray-400 rounded-md py-2 px-3 w-full h-32" id="message" name="message" placeholder="Escribe tu mensaje"></textarea>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" type="submit">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
