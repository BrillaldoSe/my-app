// components/puck/FooterBlock.tsx
import { type ComponentConfig } from "@measured/puck";

export const FooterBlock: ComponentConfig = {
  fields: {
    text: { type: "text" },
  },
  defaultProps: {
    text: "© 2025 Mi sitio web",
  },
  render: ({ text }) => (
    <footer style={{ padding: 20, background: "#eee", textAlign: "center" }}>
      <p>{text}</p>
    </footer>
  ),
};
