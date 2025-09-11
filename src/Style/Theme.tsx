import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    text: string;
    box:string;
    border:string;
    explanation:string;
    bgBar:string;
  }
}

export const lightTheme = {
    background: "#cbd5e1",
    text:"#334155",
    box:"#f8fafc",
    border:"1.5px solid #1e293b",
    explanation:"#64748b",
    bgBar:"#4f46e5"
}

export const darkTheme = {
    background: "#000",
    text:"#fff",
    box:"#334155",
    border:"1.5px solid #fff",
    explanation:"#94a3b8",
    bgBar:"#2196F3"
}