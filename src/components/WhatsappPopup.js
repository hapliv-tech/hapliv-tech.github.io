// components/WhatsappFloat.js
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloat() {
  const whatsappNumber = "919810471255"; // Replace with your number (no '+')
  const preFilledMsg = encodeURIComponent("Hello! I would like to book an appointment at Hapliv Dental Clinic.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${preFilledMsg}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={floatStyle}
    >
      <FaWhatsapp size={30} />
    </a>
  );
}

const floatStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#25D366",
  color: "#fff",
  borderRadius: "50%",
  padding: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  zIndex: 9999,
  cursor: "pointer",
};
