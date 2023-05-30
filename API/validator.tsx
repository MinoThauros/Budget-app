//creating a validator which takes in an array

export class Validator {
    readonly specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    readonly emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex for demonstration purposes
  
    wordValidator = (word: string): boolean => {
      let status = false;
      if (word.trim().length !== 0 && !this.specialChars.test(word)) {
        status = true;
      }
      return status;
    };
  
    numValidator = (num: number): boolean => {
      let status = false;
      if (!isNaN(num) && num != 0) {
        status = true;
      }
      return status;
    };
  
    emailValidator = (email: string): boolean => {
      let status = false;
      if (this.emailRegex.test(email)) {
        status = true;
      }
      return status;
    };
  }