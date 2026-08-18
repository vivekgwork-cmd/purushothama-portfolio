import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { submitContactForm } from "../lib/api";

const PROFESSIONS = [
  "Student",
  "Salaried",
  "Self-Employed / Business",
  "Homemaker",
  "Retired",
  "Other",
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    await submitContactForm(data);
    reset();
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <Reveal as="div" className="contact__intro">
          <span className="eyebrow">Get Started</span>
          <h2>Take the First Step Today</h2>
          <p>
            Share your details and Purushothama P B will personally get in touch to
            walk you through the opportunity — no obligation, just a conversation.
          </p>

          <div className="contact__office">
            <h4>Office</h4>
            <p>
              Life Insurance Corporation of India
              <br />
              Jeevan Tunga, Kamakshi Street
              <br />
              Shivamogga-II, Shivamogga Division
            </p>
          </div>
        </Reveal>

        <Reveal as="div" className="contact__card" delay={0.1}>
          <AnimatePresence mode="wait">
            {isSubmitSuccessful ? (
              <motion.div
                key="success"
                className="contact__success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="contact__success-icon">✓</div>
                <h3>Thank you!</h3>
                <p>
                  Your details have been received. Purushothama P B (or a member of
                  the team) will reach out shortly.
                </p>
                <button type="button" className="btn btn-outline" onClick={() => reset()}>
                  Submit another response
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                noValidate
              >
                <div className="form-row">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register("name", { required: "Please enter your name" })}
                  />
                  {errors.name && <span className="form-error">{errors.name.message}</span>}
                </div>

                <div className="form-row form-row--split">
                  <div>
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                      id="mobile"
                      type="tel"
                      placeholder="10-digit mobile number"
                      aria-invalid={errors.mobile ? "true" : "false"}
                      {...register("mobile", {
                        required: "Mobile number is required",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Enter a valid 10-digit mobile number",
                        },
                      })}
                    />
                    {errors.mobile && <span className="form-error">{errors.mobile.message}</span>}
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      aria-invalid={errors.email ? "true" : "false"}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && <span className="form-error">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="form-row form-row--split">
                  <div>
                    <label htmlFor="city">City</label>
                    <input
                      id="city"
                      type="text"
                      placeholder="Your city"
                      aria-invalid={errors.city ? "true" : "false"}
                      {...register("city", { required: "City is required" })}
                    />
                    {errors.city && <span className="form-error">{errors.city.message}</span>}
                  </div>

                  <div>
                    <label htmlFor="profession">Current Profession</label>
                    <select
                      id="profession"
                      defaultValue=""
                      aria-invalid={errors.profession ? "true" : "false"}
                      {...register("profession", { required: "Please select an option" })}
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      {PROFESSIONS.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                    {errors.profession && (
                      <span className="form-error">{errors.profession.message}</span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <label htmlFor="message">Message (optional)</label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us a little about yourself"
                    {...register("message")}
                  />
                </div>

                <label className="form-checkbox">
                  <input
                    type="checkbox"
                    {...register("consent", {
                      required: "Please provide consent to be contacted",
                    })}
                  />
                  <span>
                    I agree to be contacted regarding this opportunity via call, SMS,
                    WhatsApp or email.
                  </span>
                </label>
                {errors.consent && <span className="form-error">{errors.consent.message}</span>}

                <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting…" : "Submit & Get a Callback"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
