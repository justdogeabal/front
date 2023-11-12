const Page = ({
  header,
  children,
  footer,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}) => (
  <>
    <header>{header}</header>
    <main>{children}</main>
    <footer>{footer}</footer>
  </>
);

export default Page;
