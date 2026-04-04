import { useEffect, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Layout from '../components/Layout';
import {
  buildUniqueEmailSubject,
  runContactValidation,
  hasValidationErrors,
  validateEmailSubject,
} from '../utils/contactValidation';

/** Formspree form id (hash), e.g. xykbbwly — set REACT_APP_FORMSPREE_FORM_ID in .env if different */
const FORMSPREE_FORM_ID = process.env.REACT_APP_FORMSPREE_FORM_ID || 'xykbbwly';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  notes: '',
};

const ContactPage = () => {
  const [formspreeState, submitToFormspree] = useForm(FORMSPREE_FORM_ID);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitError, setSubmitError] = useState('');
  const subjectInputRef = useRef(null);

  const setField = (name, v) => {
    setValues((prev) => ({ ...prev, [name]: v }));
  };

  const touch = (name) => setTouched((prev) => ({ ...prev, [name]: true }));

  const handleBlur = (field, currentValue) => {
    touch(field);
    const merged = { ...values, [field]: currentValue };
    setErrors(runContactValidation(merged));
  };

  useEffect(() => {
    if (formspreeState.succeeded) {
      setValues(initialValues);
      setErrors({});
      setTouched({});
      setSubmitError('');
      if (subjectInputRef.current) subjectInputRef.current.value = '';
    }
  }, [formspreeState.succeeded]);

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
      return;
    }

    const uniqueSubject = buildUniqueEmailSubject({
      firstName: values.firstName,
      lastName: values.lastName,
    });
    const subjectErr = validateEmailSubject(uniqueSubject);
    if (subjectErr) {
      setSubmitError(subjectErr);
      return;
    }

    if (subjectInputRef.current) {
      subjectInputRef.current.value = uniqueSubject;
    }

    await submitToFormspree({
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      notes: values.notes.trim(),
      subject: uniqueSubject,
      _subject: uniqueSubject,
    });
  };

  const showError = (field) => Boolean(touched[field] && errors[field]);

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

        {formspreeState.succeeded && (
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
          <input
            ref={subjectInputRef}
            type="hidden"
            id="contact-form-subject"
            name="subject"
            defaultValue=""
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
          />
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
              <ValidationError className="contact-form__error" field="firstName" errors={formspreeState.errors} prefix="" />
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
              <ValidationError className="contact-form__error" field="lastName" errors={formspreeState.errors} prefix="" />
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
              <ValidationError className="contact-form__error" field="email" errors={formspreeState.errors} prefix="" />
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
              <ValidationError className="contact-form__error" field="phone" errors={formspreeState.errors} prefix="" />
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
              <ValidationError className="contact-form__error" field="notes" errors={formspreeState.errors} prefix="" />
            </div>
          </div>

          <ValidationError className="contact-page__banner contact-page__banner--error" errors={formspreeState.errors} />

          <div className="contact-form__actions">
            <button
              type="submit"
              className="contact-form__submit"
              disabled={formspreeState.submitting}
            >
              {formspreeState.submitting ? 'Transmitting…' : 'Submit'}
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default ContactPage;
