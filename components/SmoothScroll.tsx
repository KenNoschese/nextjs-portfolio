"use client";
import { Lenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <Lenis root options={{ lerp: 0.5, duration: 2, smoothWheel: true }}>
      {children}
    </Lenis>
  );
}
