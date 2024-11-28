import { defineConfig, transformerDirectives } from "unocss";

export default defineConfig({
  // ...Unocss options
  transformers:[
    transformerDirectives(),
  ],
//   shortcuts: {
//     "border-hsla": "border border-white/20",
//     "nav-hover-btn":
//       "relative ms-10 font-general text-xs uppercase text-blue-50 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer",
//     "floating-nav": "bg-black rounded-lg border",
//     "absolute-center":
//       "absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]",
//     "flex-center": "flex justify-center items-center",
//     "hero-heading":
//       "uppercase font-zentry font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem]",
//     "about-subtext":
//       "absolute bottom-[-80dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]",
//     "about-image":
//       "absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]",
//     "animated-title":
//       "flex flex-col gap-1 text-7xl uppercase leading-[.8] text-white sm:px-32 md:text-[6rem]",
//     "animated-word": "special-font font-zentry font-black opacity-0",
//     "bento-tilt_1":
//       "relative border-hsla col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out",
//     "bento-tilt_2":
//       "relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out",
//     "bento-title": "uppercase md:text-6xl text-4xl font-black font-zentry",
//     "story-img-container": "relative md:h-dvh h-[90vh] w-full",
//   },
//   rules: [
//     [
//       "mask-clip-path",
//       { "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
//     ],
//     [
//       "animated-word",
//       {
//         transform:
//           "translate3d(10px, 51px, -60px) rotateY(60deg) rotateX(-40deg)",
//         "transform-origin": "50% 50% -150px !important",
//         "will-change": "opacity, transform",
//       },
//     ],
//     [
//       "story-img-container",
//       {
//         filter: 'url("#flt_tag")',
//       },
//     ],
//     [
//       "special-font-b",
//       {
//         "font-family": '"Zentry"',
//         "font-feature-settings": '"ss01" on',
//       },
//     ],
//   ],
//   variants: [
//     // Variant to target `b` elements inside `special-font`
//     (matcher) =>
//       matcher.startsWith("special-font") ? `${matcher} b` : matcher,
//   ],
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
        300: "#E11D48",
      },
      yellow: {
        100: "#8E983F",
        300: "#EDFF66",
      },
    },
    fontFamily: {
      zentry: ["zentry", "sans-serif"],
      general: ["general", "sans-serif"],
      "circular-web": ["circular-web", "sans-serif"],
      "robert-medium": ["robert-medium", "sans-serif"],
      "robert-regular": ["robert-regular", "sans-serif"],
    },
  },
});
