declare module "framer-motion" {
  import { ReactNode, CSSProperties } from "react";

  export interface ViewportOptions {
    once?: boolean;
    margin?: string;
    amount?: number | "some" | "all";
  }

  export interface MotionProps {
    children?: ReactNode;
    initial?: any;
    animate?: any;
    exit?: any;
    variants?: any;
    transition?: any;
    style?: CSSProperties;
    className?: string;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: ViewportOptions;
    drag?: boolean;
    dragConstraints?: any;
    onDragEnd?: (event: any, info: any) => void;
    layout?: boolean;
    custom?: any;
  }

  export const motion: {
    div: React.ForwardRefExoticComponent<
      MotionProps & React.RefAttributes<HTMLDivElement>
    >;
    span: React.ForwardRefExoticComponent<
      MotionProps & React.RefAttributes<HTMLSpanElement>
    >;
    button: React.ForwardRefExoticComponent<
      MotionProps & React.RefAttributes<HTMLButtonElement>
    >;
    [key: string]: any;
  };

  export const AnimatePresence: React.FC<{
    children?: ReactNode;
    initial?: boolean;
    onExitComplete?: () => void;
  }>;

  export const useAnimation: () => {
    start: (definition: any) => Promise<void>;
    stop: () => void;
  };

  export const useInView: () => [React.RefObject<any>, boolean];
}
