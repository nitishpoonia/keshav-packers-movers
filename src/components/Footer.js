// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p className="font-poppins font-poppinsRegular text-body">
        © {new Date().getFullYear()} Keshav Packers and Movers. All rights
        reserved.
      </p>
    </footer>
  );
}
