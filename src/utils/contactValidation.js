/** Returns an error message string, or `null` when valid. */

export function validateFirstName(value) {
  const t = String(value ?? '').trim();
  if (!t) return 'First name is required.';
  if (t.length < 2) return 'First name must be at least 2 characters.';
  return null;
}

export function validateLastName(value) {
  const t = String(value ?? '').trim();
  if (!t) return 'Last name is required.';
  if (t.length < 2) return 'Last name must be at least 2 characters.';
  return null;
}

export function validateEmail(value) {
  const t = String(value ?? '').trim();
  if (!t) return 'Email is required.';
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!re.test(t)) return 'Enter a valid email address.';
  return null;
}

export function validatePhone(value) {
  const raw = String(value ?? '').trim();
  if (!raw) return 'Contact number is required.';
  const digits = raw.replace(/\D/g, '');
  if (digits.length < 10) return 'Enter a valid number with at least 10 digits.';
  if (digits.length > 15) return 'Contact number has too many digits.';
  return null;
}

export function validateNotes(value) {
  const t = String(value ?? '').trim();
  if (!t) return 'Notes cannot be empty — please describe your inquiry.';
  return null;
}

/** @returns {Record<string, string | null>} */
export function runContactValidation(values) {
  return {
    firstName: validateFirstName(values.firstName),
    lastName: validateLastName(values.lastName),
    email: validateEmail(values.email),
    phone: validatePhone(values.phone),
    notes: validateNotes(values.notes),
  };
}

export function hasValidationErrors(errorMap) {
  return Object.values(errorMap).some((msg) => msg != null && msg !== '');
}

/**
 * Unique per submission so inbox clients (e.g. Gmail) do not thread every contact as one conversation.
 * Includes ISO time + random id so subjects never match previous sends.
 */
export function buildUniqueEmailSubject({ firstName, lastName } = {}) {
  const fn = String(firstName ?? '').trim();
  const ln = String(lastName ?? '').trim();
  const who = [fn, ln].filter(Boolean).join(' ') || 'Visitor';
  const iso = new Date().toISOString();
  const id =
    typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
  return `Portfolio — ${who} — ${iso} — ${id}`;
}

/** Validates the generated subject before send (should always pass if buildUniqueEmailSubject is used). */
export function validateEmailSubject(subject) {
  const s = String(subject ?? '').trim();
  if (!s) return 'Message subject could not be generated.';
  if (s.length < 32) return 'Message subject is invalid (too short).';
  if (!s.startsWith('Portfolio —')) return 'Message subject is invalid (format).';
  const parts = s.split(' — ');
  if (parts.length < 4) return 'Message subject is invalid (missing segments).';
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(parts[2] ?? '')) {
    return 'Message subject is invalid (timestamp).';
  }
  if (!(parts[3] ?? '').length) return 'Message subject is invalid (unique id).';
  return null;
}
