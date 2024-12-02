"use client";
import { useEffect } from "react";

export default function ServiceWorker() {
  useEffect(() => {
    window.addEventListener("load", async () => {
      if ("serviceWorker" in navigator) {
        const worker = await navigator.serviceWorker.register("/sw.js");
        console.log(worker);
      }
    });
  }, []);
  return null;
}
