import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>Maleeha's CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="https://botostart.ir" target="_blank" rel="noreferrer">
          Maleeha is cute
        </a>{" "}
        Next.js | CRM Project &copy;
      </footer>
    </>
  );
}

export default Layout;
