import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: string;
    box: string;
    border: string;
    explanation: string;
    bgBar: string;
    borderBox: string;
    colorPrice: string;
    colorTotal: string;
    colorBill: string;
    error: string;
  }
}

export const lightTheme = {
  background: "#cbd5e1",
  text: "#334155",
  box: "#f8fafc",
  border: "#1e293b",
  explanation: "#64748b",
  bgBar: "#4f46e5",
  borderBox: "2px solid #8b5cf6",
  colorPrice: "#8b5cf6",
  colorTotal: "#64748b",
  colorBill: "#64748b",
  error: "#ef4444",
};

export const darkTheme = {
  background: "#000",
  text: "#fff",
  box: "#334155",
  border: "#ffffff",
  explanation: "#94a3b8",
  bgBar: "#2196f3",
  borderBox: "2px solid #2196f3",
  colorPrice: "#2196f3",
  colorTotal: "#9ca3af",
  colorBill: "#111827",
  error: "#f87171",
};
