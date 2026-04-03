"use client";

import React, { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xjkavpzl");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        title: "Mensagem enviada!",
        text: "Obrigado pelo contato 🚀",
        icon: "success",
        confirmButtonColor: "#6366f1",
        background: "#020617",
        color: "#fff",
      });

      formRef.current?.reset();
    }
  }, [state.succeeded]);

  return (
    <section
      id="contato"
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      {/* Background igual ao Hero */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.1),transparent_50%)]" />

      <div className="max-w-3xl w-full relative z-10">
        
        {/* Título */}
      

        {/* Card */}
        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-8 shadow-lg">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            {/* Nome */}
            <div>
              <label className="text-sm text-slate-300">Nome</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Seu nome"
                className="mt-2 w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="seu@email.com"
                className="mt-2 w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* Mensagem */}
            <div>
              <label className="text-sm text-slate-300">Mensagem</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Digite sua mensagem..."
                className="mt-2 w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition resize-none"
              />
              <ValidationError prefix="Mensagem" field="message" errors={state.errors} />
            </div>

            {/* Botão */}
            <button
              type="submit"
              disabled={state.submitting}
              className="mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ease-out transform hover:scale-105 shadow-lg hover:shadow-indigo-500/40 disabled:opacity-50"
            >
              {state.submitting ? "Enviando..." : "Enviar mensagem"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}