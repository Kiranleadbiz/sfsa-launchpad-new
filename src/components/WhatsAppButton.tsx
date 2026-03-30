import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "916309792244";
  const message = encodeURIComponent("Hello, I would like to know more about SFSA courses.");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      style={{ background: "#25D366" }}
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;
