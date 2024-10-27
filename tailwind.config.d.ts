declare module 'tailwindcss' {
  interface Theme {
    colors?: { [key: string]: string | { DEFAULT: string } }; // Example structure for colors
    spacing?: { [key: string]: string | number }; // Example structure for spacing
    // Add other properties as needed based on your configuration
  }

  interface TailwindConfig {
    theme?: {
      extend?: Theme; // Extend the theme with custom properties
    };
    variants?: {
      [key: string]: string[]; // Variants as key-value pairs
    };
    // You can add more properties as needed
  }

  const tailwindConfig: TailwindConfig; // Use the defined TailwindConfig type
  export default tailwindConfig;
}
