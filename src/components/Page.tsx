const Page = ({
  header,
  children,
  footer,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}) => (
  <div>
    <header>{header}</header>
    <main>{children}</main>
    <footer>{footer}</footer>
  </div>
);

export default Page;
