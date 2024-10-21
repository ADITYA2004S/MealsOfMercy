const PASSWORD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const validatePassword = (password: string) => {
  if (password.split(" ").length !== 1) {
    throw new Error("Password Cannot Contain Spaces");
  }

  if (!PASSWORD_REGEX.test(password)) {
    throw new Error(
      "Password Must Include Letters, Numbers, and Special Characters"
    );
  }
};

export const validateMobile = (mobile: number) => {
  if (!["6", "7", "8", "9"].includes(mobile.toString().charAt(0))) {
    throw new Error("Mobile Number Must Start With 6, 7, 8, or 9");
  }

  if (mobile.toString().length !== 10) {
    throw new Error("Mobile Number Must Be 10 Digits");
  }
};

export const validateFixedLength = (
  name: string,
  value: number | string,
  length: number
) => {
  if (value.toString().length !== length) {
    throw new Error(`${name} Must Be ${length} Digits`);
  }
};

export const validateRangedLength = (
  name: string,
  value: number | string,
  min: number,
  max: number
) => {
  const length = value.toString().length;

  if (length < min || length > max) {
    throw new Error(`${name} Must Be ${min} To ${max} Digits`);
  }
};

export const validatePattern = (
  value: string | number,
  pattern: RegExp,
  error: string
) => {
  if (!pattern.test(value.toString())) {
    throw new Error(error);
  }
};
