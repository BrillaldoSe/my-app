// components/puck/SectionBlock.tsx
import { type ComponentConfig } from "@measured/puck";
import { Section } from "../ui/Section"; // Importa el componente Section
import styles from "../ui/SectionBlock.module.css";

export const SectionBlock: ComponentConfig = {
  fields: {
    content: { type: "textarea", label: "Contenido HTML" },
    maxWidth: { type: "text", label: "Ancho máximo", required: false },
  },
  defaultProps: {
    content: "Contenido de la sección",
    maxWidth: "1280px",
  },
  render: ({ content, maxWidth }) => (
    <Section maxWidth={maxWidth}>
      <div
        className={styles.sectionContent}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Section>
  ),
};
