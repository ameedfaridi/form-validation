export const isValidate = (str = "", givenLength = 3, isEmail) => {
  if (!str.length) {
    return {
      isValid: false,
      errorMsg: "field is required!",
    };
  } else if (isEmail) {
    const isValidEmail = str
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      
    if (isValidEmail) return errorInitial;
    return {
      isValid: false,
      errorMsg: "must be a valid email address!",
    };
  } else if (str.length < givenLength) {
    return {
      isValid: false,
      errorMsg: `must be atleast ${givenLength} characters long!`,
    };
  } else {
    return errorInitial;
  }
};

export const errorInitial = {
  isValid: true,
  errorMsg: "",
};
