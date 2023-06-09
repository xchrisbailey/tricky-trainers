declare global {
  namespace App {
    interface Locals {
      auth: import('lucia-auth').AuthRequest;
    }
  }
}

/// <reference types="lucia-auth" />
declare global {
  namespace Lucia {
    type Auth = import('$lib/server/lucia').Auth;
    type UserAttributes = {
      email: string;
      first_name: string;
      last_name: string;
    };
  }
}

// THIS IS IMPORTANT!!!
export {};
