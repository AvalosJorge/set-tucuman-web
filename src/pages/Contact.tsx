import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import contactBg from "../assets/about.jpg";
import securityImg from "../assets/security.jpg";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const [errors, setErrors] = useState<any>({});
  const [sending, setSending] = useState(false);

  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [statusMsg, setStatusMsg] = useState("");

  const validate = () => {
    const formData = new FormData(form.current!);
    const nombre = formData.get("nombre")?.toString().trim() ?? "";
    const apellido = formData.get("apellido")?.toString().trim() ?? "";
    const telefono = formData.get("telefono")?.toString().trim() ?? "";
    const correo = formData.get("correo")?.toString().trim() ?? "";
    const mensaje = formData.get("mensaje")?.toString().trim() ?? "";

    const newErrors: any = {};

    if (!/^[A-Za-zÁÉÍÓÚÜáéíóúüñÑ ]+$/.test(nombre))
      newErrors.nombre = "El nombre solo debe contener letras.";

    if (!/^[A-Za-zÁÉÍÓÚÜáéíóúüñÑ ]+$/.test(apellido))
      newErrors.apellido = "El apellido solo debe contener letras.";

    if (!/^[0-9]{7,15}$/.test(telefono))
      newErrors.telefono = "Debe ingresar un teléfono válido (solo números).";

    if (!/^\S+@\S+\.\S+$/.test(correo))
      newErrors.correo = "Ingrese un correo válido.";

    if (mensaje.length < 10)
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    if (!validate()) return;

    setSending(true);

    emailjs
      .sendForm(
        "service_oxqij89",
        "template_mc00woq",
        form.current,
        "vwJLnbD7Xo1YdnmGO"
      )
.then(
  () => {
    setStatus("success");
    setStatusMsg(
      "Mensaje enviado correctamente. Nos pondremos en contacto a la brevedad."
    );

    form.current?.reset();
    setErrors({});

    // ⏱ Ocultar mensaje luego de 4 segundos
    setTimeout(() => {
      setStatus(null);
      setStatusMsg("");
    }, 4000);
  },
  (error) => {
    console.error("Error al enviar:", error);

    setStatus("error");
    setStatusMsg(
      "Ocurrió un error al enviar el mensaje. Intentalo nuevamente."
    );

    // ⏱ Ocultar mensaje luego de 4 segundos
    setTimeout(() => {
      setStatus(null);
      setStatusMsg("");
    }, 4000);
  }
)


      .finally(() => setSending(false));
  };

  return (
    <section className="contacto-container">
      <div
        className="contact-hero text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 148, 136, 0.7), rgba(13, 148, 136, 0.7)), url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="hero-title">Contacto</h1>
        <p className="hero-subtitle">
          Envíanos tu consulta o pedido de presupuesto
        </p>
      </div>

      <div className="container contact-content py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">

            {status && (
              <div className={`status-box ${status}`}>{statusMsg}</div>
            )}

            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-form glass"
            >
              <div className="mb-3 field-group">
                <label>Nombre</label>
                <input type="text" name="nombre" />
                {errors.nombre && (
                  <span className="error">{errors.nombre}</span>
                )}
              </div>

              <div className="mb-3 field-group">
                <label>Apellido</label>
                <input type="text" name="apellido" />
                {errors.apellido && (
                  <span className="error">{errors.apellido}</span>
                )}
              </div>

              <div className="mb-3 field-group">
                <label>Teléfono</label>
                <input type="text" name="telefono" />
                {errors.telefono && (
                  <span className="error">{errors.telefono}</span>
                )}
              </div>

              <div className="mb-3 field-group">
                <label>Email</label>
                <input type="email" name="correo" />
                {errors.correo && (
                  <span className="error">{errors.correo}</span>
                )}
              </div>

              <div className="mb-3 field-group">
                <label>Mensaje</label>
                <textarea name="mensaje" rows={4} />
                {errors.mensaje && (
                  <span className="error">{errors.mensaje}</span>
                )}
              </div>

              <button type="submit" className="btn-enviar" disabled={sending}>
                {sending ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={securityImg}
              alt="Seguridad Electrónica"
              className="img-fluid rounded shadow image-animate"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
