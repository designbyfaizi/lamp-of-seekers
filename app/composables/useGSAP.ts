import { gsap } from "gsap";

type AnimationFn = () => void;

// Types for options and GSAP context
interface UseGSAPOptions {
  scope?: Ref<HTMLElement | null>; // Scope for limiting animations to specific elements
  revertOnUpdate?: boolean; // Revert animations on dependency update
  dependencies?: any[]; // Watch dependencies
}

export const useGSAP = (
  callback: (gsapContext: gsap.Context) => void,
  options: UseGSAPOptions = {}
) => {
  const { scope, revertOnUpdate = false, dependencies = [] } = options;
  const gsapContext = ref<gsap.Context | null>(null);

  const initializeContext = () => {
    const contextScope = scope?.value || document;
    gsapContext.value = gsap.context(() => {
      if (callback) callback(gsapContext.value!);
    }, contextScope);
  };

  onMounted(() => {
    initializeContext();
  });

  watch(dependencies, () => {
    if (revertOnUpdate && gsapContext.value) {
      gsapContext.value.revert();
      initializeContext();
    }
  });

  onUnmounted(() => {
    gsapContext.value?.revert(); // Clean up on unmount
  });

  return {
    gsapContext: gsapContext.value,
  };
};
