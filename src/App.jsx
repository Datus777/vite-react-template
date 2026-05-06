import { useState } from 'react';
import {
  BadgeEuro,
  Check,
  ChevronRight,
  FileText,
  Home,
  MailCheck,
  MessageCircle,
  Phone,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  ThermometerSun,
  Upload,
  Video,
  WashingMachine,
  Wrench,
  Zap
} from 'lucide-react';

const N8N_WEBHOOK_URL = 'https://TU-N8N.com/webhook/diagnostico';

const stripePlans = [
  {
    name: 'Diagnóstico Express',
    price: '29,04 €',
    tax: 'IVA incluido',
    button: 'Elegir Express',
    url: 'https://buy.stripe.com/EXPRESS_LINK',
    featured: false,
    features: [
      'Para 1 aparato',
      'Diagnóstico mediante fotos y vídeos',
      'Respuesta técnica',
      'Presupuesto de referencia por email/PDF'
    ]
  },
  {
    name: 'Diagnóstico Dual',
    price: '58,08 €',
    tax: 'IVA incluido',
    badge: 'Más elegido',
    button: 'Elegir Dual',
    url: 'https://buy.stripe.com/DUAL_LINK',
    featured: true,
    features: [
      'Para 2 aparatos',
      'Diagnóstico mediante fotos y vídeos',
      'Llamada telefónica de 15 min',
      'Ideal para confirmar fallos complejos'
    ]
  },
  {
    name: 'Diagnóstico Hogar',
    price: '84,70 €',
    tax: 'IVA incluido',
    button: 'Elegir Hogar',
    url: 'https://buy.stripe.com/HOGAR_LINK',
    featured: false,
    features: [
      'Para 3 aparatos',
      'Videollamada técnica de 15 min',
      'Guía en directo para pruebas o reseteos',
      'Presupuesto orientativo'
    ]
  }
];

const benefits = [
  { icon: BadgeEuro, text: 'Ahorra dinero antes de reparar' },
  { icon: Video, text: 'Diagnóstico claro por fotos y vídeos' },
  { icon: FileText, text: 'Presupuesto orientativo por email/PDF' }
];

const trustItems = [
  { icon: ShieldCheck, label: '16 años de experiencia' },
  { icon: Home, label: 'Sin desplazamientos' },
  { icon: MessageCircle, label: 'Respuesta técnica clara' },
  { icon: Check, label: 'IVA incluido' }
];

const problems = [
  {
    icon: Wrench,
    title: '¿No sabes si reparar o cambiar?',
    text: 'Recibe una opinión técnica antes de invertir en una reparación que quizás no compense.'
  },
  {
    icon: BadgeEuro,
    title: '¿Te han dado un presupuesto alto?',
    text: 'Contrasta el fallo y el coste aproximado con una revisión independiente y clara.'
  },
  {
    icon: Zap,
    title: '¿Tu equipo falla y necesitas orientación?',
    text: 'Explica los síntomas y envía material para entender mejor qué puede estar ocurriendo.'
  }
];

const steps = [
  {
    icon: Sparkles,
    title: 'Elige tu plan',
    text: 'Selecciona el diagnóstico que encaja con el número de aparatos y el nivel de ayuda que necesitas.'
  },
  {
    icon: Upload,
    title: 'Envía fotos o vídeos',
    text: 'Comparte síntomas, modelo, códigos de error y enlaces a imágenes o vídeos del problema.'
  },
  {
    icon: MailCheck,
    title: 'Recibe diagnóstico y presupuesto',
    text: 'Te envío una explicación clara con orientación de reparación y coste aproximado.'
  }
];

const faqs = [
  {
    question: '¿Cuánto tarda el diagnóstico?',
    answer: 'Normalmente recibes una respuesta técnica en unas 24 horas laborables desde que envías toda la información.'
  },
  {
    question: '¿Qué necesito enviar?',
    answer: 'Nombre, contacto, tipo de aparato, marca, modelo, descripción del fallo y, si puedes, fotos o vídeos.'
  },
  {
    question: '¿El precio incluye IVA?',
    answer: 'Sí, todos los precios mostrados incluyen IVA.'
  },
  {
    question: '¿Puedo enviar vídeos?',
    answer: 'Sí. Puedes adjuntar un enlace a tus vídeos o fotos desde Drive, iCloud, Dropbox u otra plataforma.'
  },
  {
    question: '¿Y si no merece la pena reparar?',
    answer: 'Te lo indicaré de forma clara para ayudarte a decidir antes de gastar más dinero.'
  },
  {
    question: '¿El diagnóstico garantiza la reparación?',
    answer: 'No. Es una orientación técnica online basada en la información recibida, no una garantía de reparación.'
  }
];

const applianceOptions = ['Lavadora', 'Caldera', 'Aire acondicionado', 'Lavavajillas', 'Frigorífico', 'Horno', 'Otro'];

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="AntesDeReparar inicio">
        <span className="brand-mark">A</span>
        AntesDeReparar
      </a>
      <nav className="nav-links" aria-label="Navegación principal">
        <a href="#como-funciona">Cómo funciona</a>
        <a href="#planes">Planes</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a className="nav-cta" href="#formulario">
        Solicitar diagnóstico
      </a>
    </header>
  );
}

function HeroMockup() {
  return (
    <div className="hero-panel" aria-label="Caso recibido en revisión técnica">
      <div className="panel-top">
        <div>
          <p className="eyebrow">Caso recibido</p>
          <h2>En revisión técnica</h2>
        </div>
        <span className="status-pill">24h</span>
      </div>

      <div className="device-switcher">
        <span className="active"><WashingMachine size={16} /> Lavadora</span>
        <span><ThermometerSun size={16} /> Caldera</span>
        <span><Zap size={16} /> Aire acondicionado</span>
      </div>

      <div className="case-card">
        <div>
          <p>Aparato</p>
          <strong>Lavadora Serie 6</strong>
        </div>
        <WashingMachine size={34} />
      </div>

      <div className="diagnosis-box">
        <div className="pulse-dot" />
        <div>
          <p>Diagnóstico estimado</p>
          <strong>Revisión inicial en 24 horas</strong>
        </div>
      </div>

      <div className="mini-grid">
        <div><Upload size={18} /> Fotos</div>
        <div><PlayCircle size={18} /> Video</div>
        <div><FileText size={18} /> PDF</div>
        <div><BadgeEuro size={18} /> Presupuesto</div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-copy">
        <span className="badge"><ShieldCheck size={16} /> Técnico con 16 años de experiencia</span>
        <h1>Diagnóstico profesional de averías sin salir de casa</h1>
        <p className="hero-subtitle">
          Te digo qué le pasa a tu electrodoméstico, aire acondicionado o caldera,
          si merece la pena repararlo y cuánto podría costar.
        </p>
        <div className="benefit-list">
          {benefits.map(({ icon: Icon, text }) => (
            <div className="benefit" key={text}>
              <Icon size={19} />
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#planes">
            Ver planes <ChevronRight size={18} />
          </a>
          <a className="btn btn-secondary" href="#como-funciona">
            Cómo funciona
          </a>
        </div>
      </div>
      <HeroMockup />
    </section>
  );
}

function TrustBar() {
  return (
    <section className="trust section-shell" aria-label="Datos de confianza">
      {trustItems.map(({ icon: Icon, label }) => (
        <div className="trust-item" key={label}>
          <Icon size={21} />
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="section section-shell">
      <div className="section-heading">
        <span className="section-kicker">Decisión informada</span>
        <h2>Antes de gastar dinero, confirma qué falla</h2>
      </div>
      <div className="card-grid three">
        {problems.map(({ icon: Icon, title, text }) => (
          <article className="info-card" key={title}>
            <div className="icon-box"><Icon size={23} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section id="como-funciona" className="section section-shell">
      <div className="section-heading">
        <span className="section-kicker">Proceso sencillo</span>
        <h2>Cómo funciona</h2>
      </div>
      <div className="steps">
        {steps.map(({ icon: Icon, title, text }, index) => (
          <article className="step-card" key={title}>
            <span className="step-number">{index + 1}</span>
            <Icon size={26} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PlansSection() {
  return (
    <section id="planes" className="section plans-section">
      <div className="section-shell">
        <div className="section-heading centered">
          <span className="section-kicker">Planes de pago</span>
          <h2>Elige el diagnóstico que necesitas</h2>
          <p>Pago inicial con Stripe Payment Links y formulario técnico conectado a n8n.</p>
        </div>
        <div className="plans-grid">
          {stripePlans.map((plan) => (
            <article className={`plan-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
              {plan.badge && <span className="plan-badge">{plan.badge}</span>}
              <h3>{plan.name}</h3>
              <div className="price">{plan.price}</div>
              <p className="tax">{plan.tax}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}><Check size={18} /> {feature}</li>
                ))}
              </ul>
              <a className="btn btn-plan" href={plan.url}>
                {plan.button}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiagnosticForm() {
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Webhook error');
      }

      event.currentTarget.reset();
      setStatus({
        type: 'success',
        message: 'Caso enviado correctamente. Revisaremos tu información y te contactaremos pronto.'
      });
    } catch {
      setStatus({
        type: 'error',
        message: 'No hemos podido enviar el caso. Revisa los datos o inténtalo de nuevo en unos minutos.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="formulario" className="section section-shell form-section">
      <div className="form-copy">
        <span className="section-kicker">Solicitud técnica</span>
        <h2>Envía tu caso para revisarlo online</h2>
        <p>
          Completa los datos del aparato y describe los síntomas. Cuánta más información envíes,
          más preciso podrá ser el diagnóstico.
        </p>
        <div className="contact-card">
          <Phone size={20} />
          <span>Preferencia de contacto por email, teléfono o WhatsApp.</span>
        </div>
      </div>

      <form className="diagnostic-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Nombre completo
            <input name="nombre" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
        </div>
        <div className="form-row">
          <label>
            Teléfono
            <input name="telefono" type="tel" autoComplete="tel" required />
          </label>
          <label>
            Plan contratado
            <select name="plan" required defaultValue="">
              <option value="" disabled>Selecciona un plan</option>
              {stripePlans.map((plan) => (
                <option key={plan.name} value={plan.name}>{plan.name}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="form-row">
          <label>
            Tipo de aparato
            <select name="tipoAparato" required defaultValue="">
              <option value="" disabled>Selecciona un aparato</option>
              {applianceOptions.map((appliance) => (
                <option key={appliance} value={appliance}>{appliance}</option>
              ))}
            </select>
          </label>
          <label>
            Marca y modelo
            <input name="marcaModelo" type="text" placeholder="Ej. Bosch Serie 6" required />
          </label>
        </div>
        <label>
          Descripción de la avería
          <textarea name="descripcion" rows="5" required placeholder="Cuenta qué ocurre, desde cuándo y qué pruebas has hecho." />
        </label>
        <div className="form-row">
          <label>
            Código de error, opcional
            <input name="codigoError" type="text" placeholder="Ej. E18, F28..." />
          </label>
          <label>
            Enlace a fotos/vídeos, opcional
            <input name="mediaUrl" type="url" placeholder="https://..." />
          </label>
        </div>
        <label>
          Preferencia de contacto
          <select name="preferenciaContacto" required defaultValue="Email">
            <option>Email</option>
            <option>Teléfono</option>
            <option>WhatsApp</option>
          </select>
        </label>
        <button className="btn btn-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar caso'}
        </button>
        {status.message && <p className={`form-message ${status.type}`}>{status.message}</p>}
      </form>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="section section-shell">
      <div className="section-heading centered">
        <span className="section-kicker">FAQ</span>
        <h2>Preguntas frecuentes</h2>
      </div>
      <div className="faq-grid">
        {faqs.map(({ question, answer }) => (
          <details className="faq-item" key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta">
      <div className="section-shell cta-inner">
        <div>
          <span className="section-kicker light">Decisión segura</span>
          <h2>Evita gastar dinero innecesario</h2>
          <p>Solicita una revisión técnica antes de tomar una decisión.</p>
        </div>
        <a className="btn btn-green" href="#planes">Ver planes</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer section-shell">
      <div>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">A</span>
          AntesDeReparar
        </a>
        <p>Diagnósticos online para electrodomésticos, aire acondicionado y calderas</p>
      </div>
      <div className="legal-links">
        <a href="#top">Aviso legal</a>
        <a href="#top">Privacidad</a>
        <a href="#top">Condiciones</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <StepsSection />
        <PlansSection />
        <DiagnosticForm />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
