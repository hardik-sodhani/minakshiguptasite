"use client";
import StickyNavBar from "./StickyNavBar";
import { usePathname } from "next/navigation";

export default function NavWrapper() {
  const pathname = usePathname();
  return pathname !== "/" ? <StickyNavBar /> : null;
} 