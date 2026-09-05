import { InputHTMLAttributes, useState } from "react";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Field({
  id,
  label,
  error,
  type = "text",
  ...props
}: FieldProps) {
  const [fieldFocused, setFieldFocused] = useState(false);

  return (
    <div className="group relative">
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-3.25 left-4.25 z-60 transition-all duration-200 group-focus-within:-top-2.5 group-focus-within:backdrop-blur-xs group-has-[input:not(:placeholder-shown)]:-top-2.5"
      >
        {label}
      </label>
      <input
        name={id}
        type={type}
        autoComplete={id}
        placeholder={!fieldFocused ? label : undefined}
        onFocus={() => setFieldFocused(true)}
        onBlur={() => setFieldFocused(false)}
        className="w-full rounded-md border border-zinc-800 bg-zinc-800 px-4 py-3 transition-colors outline-none focus:border-zinc-600"
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
