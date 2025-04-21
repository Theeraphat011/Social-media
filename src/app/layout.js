import "./globals.css";

export const metadata = {
   title: "Social Media || Tailwind",
   description: "For learn tailwind css",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
}
