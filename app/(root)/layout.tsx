import HomeNavbar from "./components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HomeNavbar />
      {children}
    </div>
  );
}
