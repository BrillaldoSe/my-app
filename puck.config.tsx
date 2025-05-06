// puck.config.ts
import type { Config } from "@measured/puck";
import { FooterBlock } from "./app/components/puck/FooterBlock"; // Asegúrate de que la ruta sea correcta
import { SectionBlock } from "./app/components/puck/SectionBlock";

type Props = {
  HeadingBlock: { title: string };
  FooterBlock: { text: string }; // Añadir también el tipo
  SectionBlock: { content: string; maxWidth?: string };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
    FooterBlock, 
    SectionBlock,
  },
};

export default config;
