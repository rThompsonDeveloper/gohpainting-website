declare module "react-helmet-async" {
  import { HelmetData } from "react-helmet";
  import { ReactNode } from "react";

  interface HelmetProps {
    children?: ReactNode;
    title?: string;
    titleTemplate?: string;
    defaultTitle?: string;
    onChangeClientState?: (
      newState: any,
      addedTags: any,
      removedTags: any
    ) => void;
  }

  export class Helmet extends React.Component<HelmetProps> {
    static peek(): HelmetData;
    static renderStatic(): HelmetData;
    static rewind(): HelmetData;
    static canUseDOM: boolean;
  }

  export class HelmetProvider extends React.Component<{
    children: ReactNode;
  }> {}
}
