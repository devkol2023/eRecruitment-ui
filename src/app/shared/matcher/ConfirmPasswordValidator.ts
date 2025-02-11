import { AbstractControl, ValidationErrors } from '@angular/forms';

export function confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.parent) {
    return null; // Skip validation if form is not initialized
  }

  const password = control.parent.get('password')?.value;
  const confirmPassword = control.value;

  if (confirmPassword === '') {
    return { required: true };
  }

  if (password !== confirmPassword) {
    return { passwordMismatch: true };
  }

  return null;
}
