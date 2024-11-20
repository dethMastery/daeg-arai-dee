import { defineConfig } from "vite";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: [
    "food-dark.svg",
    "pwa/apple-icon-180.png",
    "pwa/manifest-icon-192.maskable.png",
    "pwa/manifest-icon-512.maskable.png",
  ],
  manifest: {
    name: "แดกอะไรดี",
    short_name: "แดกไร",
    description: "หิวแดกข้าว ห้าวแดกตีนกูนี่แหละ",
    icons: [
      {
        src: "/pwa/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/pwa/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/pwa/apple-icon-180.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/pwa/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#f5f5f5",
    background_color: "#fe6e6f",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});
