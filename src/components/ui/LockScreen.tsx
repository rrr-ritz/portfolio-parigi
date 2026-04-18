"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

type Props = {
  title: string;
};

export function LockScreen({ title }: Props) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shakeKey, setShakeKey] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.refresh();
        return;
      }
      setError("Incorrect password.");
      setShakeKey((k) => k + 1);
      setPassword("");
      inputRef.current?.focus();
    } catch {
      setError("Something went wrong. Try again.");
      setShakeKey((k) => k + 1);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main
      id="main"
      className="flex min-h-[calc(100vh-120px)] items-center justify-center bg-cream px-6 py-20"
    >
      <div className="flex w-full max-w-[520px] flex-col items-center text-center">
        <div className="mb-8" aria-hidden="true">
          <svg
            width="48"
            height="56"
            viewBox="0 0 48 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 24V16C12 9.372 17.372 4 24 4C30.628 4 36 9.372 36 16V24"
              stroke="#382617"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <rect
              x="6"
              y="24"
              width="36"
              height="28"
              rx="4"
              stroke="#382617"
              strokeWidth="3"
            />
            <circle cx="24" cy="38" r="3" fill="#382617" />
          </svg>
        </div>

        <p className="mb-3 font-serif text-[14px] uppercase tracking-[0.24em] text-copper md:text-[15px]">
          Protected Case Study
        </p>
        <h1 className="font-sans text-[36px] uppercase leading-[1.05] tracking-[0.01em] text-espresso md:text-[52px]">
          {title}
        </h1>
        <p className="mt-6 font-serif text-[18px] leading-[1.45] text-espresso-muted md:text-[20px]">
          This case study is password protected. Enter the password to view.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex w-full flex-col items-center gap-4"
          noValidate
        >
          <div
            key={shakeKey}
            className={
              "w-full" + (error ? " animate-[shake_0.4s_ease-in-out]" : "")
            }
          >
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              ref={inputRef}
              id="password"
              name="password"
              type="password"
              autoComplete="off"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={error ? "true" : "false"}
              aria-describedby={error ? "password-error" : undefined}
              className="w-full rounded-[8px] border border-espresso/20 bg-paper px-5 py-4 font-sans text-[17px] text-espresso outline-none transition-colors placeholder:text-espresso-muted/60 focus:border-orange-bright"
              placeholder="Enter password"
              disabled={submitting}
            />
          </div>

          <button
            type="submit"
            disabled={submitting || password.length === 0}
            className="rounded-full bg-orange-bright px-8 py-3 font-serif text-[18px] text-cream transition-colors hover:bg-orange disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Unlocking…" : "Unlock"}
          </button>

          <p
            id="password-error"
            role={error ? "alert" : undefined}
            className={
              "min-h-[24px] font-sans text-[14px] text-orange-bright" +
              (error ? "" : " invisible")
            }
          >
            {error ?? "placeholder"}
          </p>
        </form>
      </div>

    </main>
  );
}
