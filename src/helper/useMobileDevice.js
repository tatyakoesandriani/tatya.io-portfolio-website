import { useWindowSize } from './useWindowSize';
import { LOTTIE_WIDTH } from './constants';

export function useMobileDevice() {
  const windowSize = useWindowSize();
  const width = windowSize.width < 1200 ? windowSize.width / 4 : LOTTIE_WIDTH;
  const isMobile = windowSize.width < 920;
  return { isMobile, width };
}
