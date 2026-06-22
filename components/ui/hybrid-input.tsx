import type { InputHTMLAttributes } from "react";

export function HybridInput({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`hybrid-input ${className}`} {...props} />;
}
