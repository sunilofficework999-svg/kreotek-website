"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message cannot exceed 1000 characters"),
  notRobot: z.literal(true, { message: "Please verify you are not a robot" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  "Web Development",
  "Mobile App Development",
  "AI & Machine Learning",
  "Cloud Solutions",
  "IT Consulting",
  "UI/UX Design",
  "VisitorDesk - Entry/Exit System",
  "CareDesk - Clinic System",
  "CRM Platform",
  "Other",
];

const contactInfo = [
  {
    title: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    title: "Call Us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
  },
  {
    title: "Visit Us",
    value: siteConfig.address,
    href: "#",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
];

const socialLinks = [
  {
    href: siteConfig.social.linkedin,
    label: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    href: siteConfig.social.facebook,
    label: "Facebook",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    href: siteConfig.social.instagram,
    label: "Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    href: siteConfig.social.x,
    label: "X",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export default function ContactContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const messageValue = watch("message", "");

  const onSubmit = async (data: ContactFormData) => {
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyq-70Zhxl-wvBSGxqzXdUABNgsmraIJMjpSXH4-QiSlrkb0JSvy0g-OvKyVULxxvTO/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
          mode: "no-cors",
        }
      );
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const inputBase =
    "w-full bg-gray-50 dark:bg-gray-800 border rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all text-sm";
  const inputNormal = `${inputBase} border-gray-200 dark:border-gray-700 focus:ring-primary-500/50 focus:border-primary-500/50`;
  const inputError = `${inputBase} border-red-500 dark:border-red-500 focus:ring-red-500/50 focus:border-red-500/50`;
  const labelBase = "block text-sm font-medium mb-2";
  const labelNormal = `${labelBase} text-gray-700 dark:text-gray-300`;
  const labelError = `${labelBase} text-red-500`;
  const errorStyles = "text-red-500 text-xs mt-1";

  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-24 sm:pt-32 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-500/8 rounded-full blur-[120px]" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-primary-600 font-semibold text-sm tracking-widest uppercase mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Let&apos;s Build{" "}
              <span className="gradient-text">Together</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
              Have a project in mind? Need a technology partner? We&apos;d love
              to hear from you. Get a free consultation within 24 hours.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Reach out through any channel. We respond within 24 hours.
                </p>
              </div>

              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="glass-card p-5 flex items-center gap-4 hover:border-primary-500/30 transition-all duration-300 block"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center text-primary-600 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">{info.title}</p>
                    <p className="text-gray-900 dark:text-white font-medium text-sm">{info.value}</p>
                  </div>
                </a>
              ))}

              {/* Social with Icons */}
              <div className="glass-card p-5">
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-primary-600 hover:bg-primary-50 transition-all"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-8 lg:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-400">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className={errors.name ? labelError : labelNormal}>
                          Full Name *
                        </label>
                        <input
                          {...register("name")}
                          placeholder="Full Name"
                          className={errors.name ? inputError : inputNormal}
                        />
                        {errors.name && (
                          <p className={errorStyles}>{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className={errors.email ? labelError : labelNormal}>
                          Email Address *
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="Email Address"
                          className={errors.email ? inputError : inputNormal}
                        />
                        {errors.email && (
                          <p className={errorStyles}>{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className={errors.phone ? labelError : labelNormal}>
                          Phone Number *
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="Phone Number"
                          className={errors.phone ? inputError : inputNormal}
                        />
                        {errors.phone && (
                          <p className={errorStyles}>{errors.phone.message}</p>
                        )}
                      </div>
                      <div>
                        <label className={labelNormal}>
                          Company
                        </label>
                        <input
                          {...register("company")}
                          placeholder="Company Name"
                          className={inputNormal}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={errors.service ? labelError : labelNormal}>
                        Service Interested In *
                      </label>
                      <select {...register("service")} className={errors.service ? inputError : inputNormal}>
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className={errorStyles}>{errors.service.message}</p>
                      )}
                    </div>

                    <div>
                      <label className={errors.message ? labelError : labelNormal}>
                        Project Details *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        maxLength={1000}
                        placeholder="Project Details"
                        className={errors.message ? inputError : inputNormal}
                      />
                      <div className="flex items-center justify-between mt-1">
                        {errors.message ? (
                          <p className={errorStyles}>{errors.message.message}</p>
                        ) : (
                          <span />
                        )}
                        <span className={`text-xs ${messageValue.length > 900 ? "text-red-400" : "text-gray-400"}`}>
                          {messageValue.length}/1000
                        </span>
                      </div>
                    </div>

                    {/* I am not a robot */}
                    <div>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative">
                          <input
                            type="checkbox"
                            {...register("notRobot")}
                            className="peer sr-only"
                          />
                          <div className={`w-6 h-6 border-2 rounded-md bg-white dark:bg-gray-800 peer-checked:bg-primary-500 peer-checked:border-primary-500 transition-all flex items-center justify-center ${errors.notRobot ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}>
                            <svg
                              className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                        </div>
                        <div className={`flex items-center gap-3 bg-gray-50 dark:bg-gray-800 border rounded-xl px-4 py-3 flex-1 group-hover:border-gray-300 transition-colors ${errors.notRobot ? "border-red-500" : "border-gray-200 dark:border-gray-700"}`}>
                          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">I am not a robot</span>
                        </div>
                      </label>
                      {errors.notRobot && (
                        <p className={errorStyles}>{errors.notRobot.message}</p>
                      )}
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
