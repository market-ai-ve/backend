export class VOValidationError extends Error {
  constructor(errors: any) {
    let err = '';
    for (const error of errors) {
      const contraints = error.constraints;
      const keys = Object.keys(contraints);

      err = contraints[keys[0]];
      break;
    }

    super(err);
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, VOValidationError.prototype);
  }
}
