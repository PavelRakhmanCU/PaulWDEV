import { useState } from 'react';
import Layout from '../components/Layout';
import {
  runContactValidation,
  hasValidationErrors,
} from '../utils/contactValidation';

const FORM_ENDPOINT = process.env.REACT_APP_CONTACT_FORM_ENDPOINT || '';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  notes: '',
};

const ContactPage = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState(null);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setField = (name, v) => {
    setValues((prev) => ({ ...prev, [name]: v }));
    if (status === 'success') setStatus(null);
  };

  const touch = (name) => setTouched((prev) => ({ ...prev, [name]: true }));

  const handleBlur = (field, currentValue) => {
    touch(field);
    const merged = { ...values, [field]: currentValue };
    setErrors(runContactValidation(merged));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    const nextErrors = runContactValidation(values);
    setErrors(nextErrors);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      notes: true,
    });

    if (hasValidationErrors(nextErrors)) {
      setStatus('error');
      return;
    }

    if (!FORM_ENDPOINT) {
      setSubmitError(
        'Form delivery is not configured. Add REACT_APP_CONTACT_FORM_ENDPOINT to your .env (e.g. your Formspree URL).',
      );
      setStatus('error');
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: values.firstName.trim(),
          lastName: values.lastName.trim(),
          email: values.email.trim(),
          _replyto: values.email.trim(),
          phone: values.phone.trim(),
          notes: values.notes.trim(),
          _subject: `Portfolio: ${values.firstName.trim()} ${values.lastName.trim()}`,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Try again later.');
      }

      setStatus('success');
      setValues(initialValues);
      setErrors({});
      setTouched({});
    } catch (err) {
      setSubmitError(err.message || 'Submission failed.');
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const showError = (field) =>
    Boolean(touched[field] && errors[field]);

  return (
    <Layout>
      <section className="contact-page page-section" id="contact" aria-labelledby="contact-page-title">
        <h1 id="contact-page-title" className="contact-page__title">
          Contact
        </h1>
        <p className="contact-page__intro">
          Send a transmission with your details. Fields marked required must be completed before the signal can be
          routed.
        </p>

        {status === 'success' && (
          <p className="contact-page__banner contact-page__banner--success" role="status">
            Message received. I will get back to you as soon as possible.
          </p>
        )}

        {submitError && (
          <p className="contact-page__banner contact-page__banner--error" role="alert">
            {submitError}
          </p>
        )}

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__grid">
            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="contact-first-name">
                First name <span className="contact-form__req">*</span>
              </label>
              <input
                id="contact-first-name"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className="contact-form__input"
                value={values.firstName}
                onChange={(e) => setField('firstName', e.target.value)}
                onBlur={(e) => handleBlur('firstName', e.target.value)}
                aria-invalid={showError('firstName')}
                aria-describedby={showError('firstName') ? 'err-first-name' : undefined}
              />
              {showError('firstName') && (
                <span id="err-first-name" className="contact-form__error">
                  {errors.firstName}
                </span>
              )}
            </div>

            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="contact-last-name">
                Last name <span className="contact-form__req">*</span>
              </label>
              <input
                id="contact-last-name"
                name="lastName"
                type="text"
                autoComplete="family-name"
                className="contact-form__input"
                value={values.lastName}
                onChange={(e) => setField('lastName', e.target.value)}
                onBlur={(e) => handleBlur('lastName', e.target.value)}
                aria-invalid={showError('lastName')}
                aria-describedby={showError('lastName') ? 'err-last-name' : undefined}
              />
              {showError('lastName') && (
                <span id="err-last-name" className="contact-form__error">
                  {errors.lastName}
                </span>
              )}
            </div>

            <div className="contact-form__field contact-form__field--full">
              <label className="contact-form__label" htmlFor="contact-email">
                Email <span className="contact-form__req">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                className="contact-form__input"
                value={values.email}
                onChange={(e) => setField('email', e.target.value)}
                onBlur={(e) => handleBlur('email', e.target.value)}
                aria-invalid={showError('email')}
                aria-describedby={showError('email') ? 'err-email' : undefined}
              />
              {showError('email') && (
                <span id="err-email" className="contact-form__error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="contact-form__field contact-form__field--full">
              <label className="contact-form__label" htmlFor="contact-phone">
                Contact number <span className="contact-form__req">*</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                className="contact-form__input"
                placeholder="+1 555 123 4567"
                value={values.phone}
                onChange={(e) => setField('phone', e.target.value)}
                onBlur={(e) => handleBlur('phone', e.target.value)}
                aria-invalid={showError('phone')}
                aria-describedby={showError('phone') ? 'err-phone' : undefined}
              />
              {showError('phone') && (
                <span id="err-phone" className="contact-form__error">
                  {errors.phone}
                </span>
              )}
            </div>

            <div className="contact-form__field contact-form__field--full">
              <label className="contact-form__label" htmlFor="contact-notes">
                Notes <span className="contact-form__req">*</span>
              </label>
              <textarea
                id="contact-notes"
                name="notes"
                rows={6}
                className="contact-form__textarea"
                value={values.notes}
                onChange={(e) => setField('notes', e.target.value)}
                onBlur={(e) => handleBlur('notes', e.target.value)}
                aria-invalid={showError('notes')}
                aria-describedby={showError('notes') ? 'err-notes' : undefined}
              />
              {showError('notes') && (
                <span id="err-notes" className="contact-form__error">
                  {errors.notes}
                </span>
              )}
            </div>
          </div>

          <div className="contact-form__actions">
            <button type="submit" className="contact-form__submit" disabled={isSubmitting}>
              {isSubmitting ? 'Transmitting…' : 'Submit'}
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default ContactPage;
