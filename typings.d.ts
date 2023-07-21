import 'react';
declare module 'react' {
  interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare global {
  declare const NEXT_PUBLIC_SOME_URL: string;
}