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
