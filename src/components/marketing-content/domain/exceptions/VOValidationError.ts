/**
 * Custom error class for handling validation errors in value objects.
 */
export class VOValidationError extends Error {
  constructor(errors: any) {
    let err = '';
    if (errors && errors.length > 0) {
      for (const error of errors) {
        const contraints = error.constraints;
        if (contraints) {
          const keys = Object.keys(contraints);
          if (keys.length > 0) {
            err = contraints[keys[0]];
            break;
          }
        }
      }
    }

    super(err);
    // Use Error.captureStackTrace for better stack trace management.
    Error.captureStackTrace(this, VOValidationError);
  }
}
