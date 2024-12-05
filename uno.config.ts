import { defineConfig, transformerDirectives } from "unocss";

export default defineConfig({
  // ...Unocss options
  transformers: [transformerDirectives()],
  shortcuts: {
    "absolute-center":
      "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
    "hero-heading":
      "uppercase font-zentry font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem]",
    "about-image":
      "absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]",
    "about-subtext":
      "absolute bottom-[-80dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]",
    "animated-title":
      "font-zentry flex flex-col gap-1 text-7xl uppercase leading-[.8] text-white sm:px-32 md:text-[6rem]",
    "flex-center": "flex justify-center items-center",
    "nav-hover-btn":
      "relative ms-10 font-general text-xs uppercase text-blue-50 after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer",
    "floating-nav": "bg-black rounded-lg border",
    "border-hsla": "border border-white/20",
    "bento-title": "uppercase md:text-6xl text-4xl font-black font-zentry",
    "bento-tilt_1":
      "relative border-hsla col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out",
    "bento-tilt_2":
      "relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out",
  },
  rules: [
    [
      "special-font",
      {
        "font-family": '"Zentry"',
        "font-feature-settings": '"ss01" on',
      },
      {
        layer: "utilities",
      },
    ],
    [
      "mask-clip-path",
      {
        "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      },
      {
        layer: "utilities",
      },
    ],
    [
      "animated-word",
      {
        "@apply": "@apply special-font font-zentry font-black opacity-0",
        transform:
          "translate3d(10px,51px,-60px) rotateY(60deg) rotateX(-40deg)",
        "transform-origin": "50% 50% -150px !important",
        "will-change": "opacity, transform",
      },
      {
        layer: "utilities",
      },
    ],
    [
      "story-img-container",
      {
        "@apply": "@apply relative md:h-dvh h-[90vh] w-full",
        filter: 'url("#flt_tag")',
      },
    ],
    [
      "story-img-mask",
      {
        "@apply":
          "@apply absolute left-0 top-0 size-full overflow-hidden md:left-[20%] md:top-[-10%] md:size-4/5",
        "clip-path": "polygon(4% 0, 83% 21%, 100% 73%, 0% 100%)",
      },
    ],
    [
      "story-img-content",
      {
        "@apply":
          "@apply absolute w-full md:h-dvh h-[50dvh] opacity-100 left-10 top-16 md:left-0 md:top-10 lg:left-[-300px] lg:top-[-100px]",
        transform:
          "translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0) scale(1)",
      },
    ],
    [
      "sword-man-clip-path",
      {
        "clip-path": "polygon(16% 0, 89% 15%, 75% 100%, 0 97%)",
      },
    ],
    [
      "contact-clip-path-1",
      {
        "clip-path": "polygon(25% 0%, 74% 0, 69% 64%, 34% 73%)",
      },
    ],
    [
      "contact-clip-path-2",
      {
        "clip-path": "polygon(29% 15%, 85% 30%, 50% 100%, 10% 64%)",
      },
    ],
  ],
  variants: [
    // Variant to target `b` elements inside `special-font`
    (matcher) => {
      if (!matcher.startsWith("special-font")) {
        return matcher;
      }
      return {
        matcher,
        selector: (s) => `${s} b`,
      };
    },
  ],
  theme: {
    colors: {
      blue: {
        50: "#DFDFF0",
        75: "#DFDFF2",
        100: "#F0F2FA",
        200: "#101010",
        300: "#4FB7DD",
      },
      rose: {
        500: "#f43f5e",
        600: "#E11D48",
      },
      yellow: {
        100: "#8E983F",
        300: "#EDFF66",
      },
    },
    fontFamily: {
      zentry: ["Zentry", "sans-serif"],
      general: ["general", "sans-serif"],
      "circular-web": ["circular-web", "sans-serif"],
      "robert-medium": ["robert-medium", "sans-serif"],
      "robert-regular": ["robert-regular", "sans-serif"],
    },
  },
});
