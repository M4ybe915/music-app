'use client';
import { useState } from 'react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construir el mailto
    const mailtoLink = `mailto:soporte@musicapp.com?subject=Mensaje de ${encodeURIComponent(
      formData.nombre
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.nombre}\nEmail: ${formData.email}\n\nMensaje:\n${formData.mensaje}`
    )}`;

    // Abrir Gmail u cliente de correo
    window.location.href = mailtoLink;

    // Limpiar el formulario
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl max-w-md w-full p-8 border border-white/20">
        <h1 className="text-4xl font-extrabold text-white mb-4 text-center">
          Contacto
        </h1>
        <p className="text-white/90 text-center mb-6">
          Escríbenos cuando quieras 😄💜
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white font-semibold mb-1 block">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
              required
            />
          </div>

          <div>
            <label className="text-white font-semibold mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
              required
            />
          </div>

          <div>
            <label className="text-white font-semibold mb-1 block">Mensaje</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí..."
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-300 transition resize-none"
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-colors duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </main>
  );
}
