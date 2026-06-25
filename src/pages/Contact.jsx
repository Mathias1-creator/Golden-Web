import { useState, useRef } from 'react';
import { Phone, Mail, Clock, MapPin, Paperclip, Star } from 'lucide-react';
import ScrollReveal from '../components/shared/ScrollReveal';

const HERO_IMG = '/images/hero-contact.png';

const CONTACT_CARDS = [
  { icon: Phone, label: 'Phone', value: '(559) 912-8046', sub: null, href: 'tel:+15599128046' },
  { icon: Mail, label: 'Email', value: 'alberto@goldenhl.com', sub: null, href: 'mailto:alberto@goldenhl.com' },
  {
    icon: Clock, label: 'Hours', href: null,
    value: 'Monday – Friday: 7AM – 5PM',
    sub: 'Saturday & Sunday: By Appointment Only',
  },
  { icon: MapPin, label: 'Service Area', value: 'Central Valley, CA', sub: null, href: null },
];

const SERVICES_OPTIONS = [
  'Custom Landscape Design',
  'Hardscape',
  'Planting Services',
  'Irrigation Systems',
  'Outdoor Lighting',
  'Synthetic Turf',
  'Sod Installation',
  'Drainage Solutions',
  'Not Sure Yet',
];

const CONTACT_PREF = ['Phone Call', 'Text Message', 'Email'];
const REFERRAL_OPTIONS = ['Google', 'Referral', 'Nextdoor', 'Instagram', 'Facebook', 'Other'];

const inputStyle = {
  background: '#111111',
  border: '1px solid rgba(201,168,76,0.2)',
  color: '#e0e0e0',
  borderRadius: '2px',
  padding: '14px 16px',
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: '15px',
  outline: 'none',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
};

const focusStyle = {
  borderColor: '#c9a84c',
  boxShadow: '0 0 0 3px rgba(201,168,76,0.15)',
};

function Label({ children, required }) {
  return (
    <label className="block font-body text-xs uppercase tracking-[2px] mb-1" style={{ color: '#a0a0a0' }}>
      {children}
      {required && <span style={{ color: '#c9a84c' }}> *</span>}
    </label>
  );
}

function FormInput({ label, required, type = 'text', placeholder, value, onChange, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      {label && <Label required={required}>{label}</Label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ ...inputStyle, ...(focused ? focusStyle : {}) }}
        required={required}
        {...props}
      />
    </div>
  );
}

function FormSelect({ label, required, placeholder, value, onChange, options }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      {label && <Label required={required}>{label}</Label>}
      <select
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        style={{
          ...inputStyle,
          ...(focused ? focusStyle : {}),
          color: value ? '#e0e0e0' : '#a0a0a0',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23c9a84c' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 16px center',
          paddingRight: '40px',
        }}
      >
        <option value="" disabled style={{ background: '#111111', color: '#a0a0a0' }}>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ background: '#111111', color: '#e0e0e0' }}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export default function Contact() {
  const fileRef = useRef(null);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', city: '',
    projectType: '', service: '', preferredDate: '',
    preferredTime: '', contactPref: '', description: '',
    referral: '',
  });
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });
  const handleFiles = (e) => setFiles(Array.from(e.target.files));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ height: '50vh' }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Contact us" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-heading text-white mb-4" style={{ fontSize: 'clamp(42px, 6vw, 72px)' }}>
            LET'S BUILD SOMETHING GREAT
          </h1>
          <p className="font-body text-lg" style={{ color: '#a0a0a0' }}>
            Request a free quote or reach out with any questions.
          </p>
        </div>
      </section>

      {/* Intro banner */}
      <div className="py-8 px-6 text-center" style={{ background: '#111111', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="w-4 h-4" style={{ color: '#c9a84c' }} />
            <span className="font-body text-sm uppercase tracking-[3px]" style={{ color: '#c9a84c' }}>Free Consultation</span>
            <Star className="w-4 h-4" style={{ color: '#c9a84c' }} />
          </div>
          <p className="font-body text-base leading-relaxed" style={{ color: '#a0a0a0' }}>
            Call, email, or fill out the form below to contact us and begin your dream project.
            We'll work with your budget to make sure every dollar you invest is worth it.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 px-6" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Left — Contact Info */}
          <ScrollReveal>
            <div className="space-y-4">
              {CONTACT_CARDS.map((card, i) => {
                const Icon = card.icon;
                const Wrapper = card.href ? 'a' : 'div';
                return (
                  <Wrapper
                    key={i}
                    href={card.href || undefined}
                    className="glass-card p-5 flex items-start gap-4 block"
                  >
                    <Icon className="w-6 h-6 shrink-0 mt-0.5" style={{ color: '#c9a84c' }} />
                    <div>
                      <p className="font-body text-sm uppercase tracking-[2px]" style={{ color: '#a0a0a0' }}>
                        {card.label}
                      </p>
                      <p className="font-body text-base" style={{ color: '#e0e0e0' }}>{card.value}</p>
                      {card.sub && (
                        <p className="font-body text-sm mt-0.5" style={{ color: '#a0a0a0' }}>{card.sub}</p>
                      )}
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            <div
              className="mt-6 p-5 rounded-[4px]"
              style={{ border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.05)' }}
            >
              <p className="font-body text-sm font-semibold mb-1" style={{ color: '#c9a84c' }}>
                ✓ Free Consultation Available
              </p>
              <p className="font-body text-[15px]" style={{ color: '#a0a0a0' }}>
                We'll meet, assess your project, and give you a clear quote — no obligation. We work with your budget and make sure every dollar is worth it.
              </p>
            </div>

            <div
              className="mt-4 p-5 rounded-[4px]"
              style={{ border: '1px solid rgba(201,168,76,0.15)', background: 'rgba(201,168,76,0.03)' }}
            >
              <p className="font-body text-[13px]" style={{ color: '#a0a0a0' }}>
                CA Contractors License #1143878 · Fully Insured · Warranty-Backed Work
              </p>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal delay={0.15}>
            {submitted ? (
              <div className="glass-card p-12 text-center">
                <h3 className="font-heading text-3xl text-white mb-4">THANK YOU</h3>
                <p className="font-body text-base" style={{ color: '#a0a0a0' }}>
                  Your request has been submitted. We will be in touch within 1 business day to schedule your free consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="font-body text-xs" style={{ color: '#a0a0a0' }}>
                  Fields marked <span style={{ color: '#c9a84c' }}>*</span> are required.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormInput label="Full Name" required placeholder="John Smith" value={form.name} onChange={handleChange('name')} />
                  <FormInput label="Phone Number" required type="tel" placeholder="(559) 000-0000" value={form.phone} onChange={handleChange('phone')} />
                </div>

                <FormInput label="Email Address" required type="email" placeholder="you@example.com" value={form.email} onChange={handleChange('email')} />
                <FormInput label="City or Location" placeholder="Fresno, CA" value={form.city} onChange={handleChange('city')} />

                {/* Commercial or Residential */}
                <div>
                  <Label required>Project Type</Label>
                  <div className="flex gap-4">
                    {['Residential', 'Commercial'].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="projectType"
                          value={type}
                          checked={form.projectType === type}
                          onChange={handleChange('projectType')}
                          style={{ accentColor: '#c9a84c' }}
                        />
                        <span className="font-body text-sm" style={{ color: '#e0e0e0' }}>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <FormSelect
                  label="Service Interested In"
                  required
                  placeholder="Select a service..."
                  value={form.service}
                  onChange={handleChange('service')}
                  options={SERVICES_OPTIONS}
                />

                {/* Date + Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormInput label="Preferred Date" type="date" value={form.preferredDate} onChange={handleChange('preferredDate')} />
                  <FormInput label="Preferred Time" type="time" value={form.preferredTime} onChange={handleChange('preferredTime')} />
                </div>

                <FormSelect
                  label="Preferred Contact Method"
                  placeholder="How should we reach you?"
                  value={form.contactPref}
                  onChange={handleChange('contactPref')}
                  options={CONTACT_PREF}
                />

                <div>
                  <Label>Project Description</Label>
                  <textarea
                    placeholder="Describe your project, ideas, or questions..."
                    value={form.description}
                    onChange={handleChange('description')}
                    rows={4}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = '#c9a84c'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.15)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>

                {/* File upload */}
                <div>
                  <Label>Upload Photos or Files</Label>
                  <div
                    className="flex items-center gap-3 cursor-pointer px-4 py-3 rounded-[2px] transition-all duration-300"
                    style={{ border: '1px dashed rgba(201,168,76,0.35)', background: '#111111' }}
                    onClick={() => fileRef.current?.click()}
                  >
                    <Paperclip className="w-5 h-5 shrink-0" style={{ color: '#c9a84c' }} />
                    <span className="font-body text-sm" style={{ color: '#a0a0a0' }}>
                      {files.length > 0
                        ? files.map((f) => f.name).join(', ')
                        : 'Click to attach photos or project files'}
                    </span>
                  </div>
                  <input
                    ref={fileRef}
                    type="file"
                    multiple
                    accept="image/*,.pdf,.doc,.docx"
                    onChange={handleFiles}
                    className="hidden"
                  />
                </div>

                <FormSelect
                  label="How Did You Hear About Us?"
                  placeholder="Select one..."
                  value={form.referral}
                  onChange={handleChange('referral')}
                  options={REFERRAL_OPTIONS}
                />

                <button
                  type="submit"
                  className="w-full font-heading text-xl uppercase tracking-[2px] py-4 rounded-[2px] transition-all duration-300"
                  style={{ background: '#c9a84c', color: '#0a0a0a', border: '1px solid #c9a84c' }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 15px rgba(201,168,76,0.4)'; e.currentTarget.style.background = '#d4b65e'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = '#c9a84c'; }}
                >
                  REQUEST FREE CONSULTATION
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}