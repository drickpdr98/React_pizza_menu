import "../index.css";

export default function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We are currently open
    </footer>
  );
}
