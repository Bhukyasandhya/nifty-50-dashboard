export const metadata = {
  title: "Nifty Dashboard",
  description: "Live Nifty 50 Data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}