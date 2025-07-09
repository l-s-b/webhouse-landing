import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Sitios web estáticos",
    paragraph:
      "Personaliza y cotiza tu web de acuerdo a tus necesidades.",
    image: "/images/blog/blog-01.jpg",
    features: [
      "Diseño responsive",
      "Formulario de contacto",
      "SEO básico",
      "Entrega en 7 días"
    ]
  },
  {
    id: 2,
    title: "Chatbots de IA",
    paragraph:
      "Automatiza la atención al cliente con nuestros chatbots inteligentes.",
    image: "/images/blog/blog-02.jpg",
    features: [""]
  },
  {
    id: 3,
    title: "Tiendas online (E-commerce)",
    paragraph:
      "Soluciones de comercio electrónico para digitalizar y globalizar tus ventas.",
    image: "/images/blog/blog-03.jpg",
    features: [
      "Montamos tu tienda con o sin catálogo existente",
      "Soporte técnico 24/7",
      "Pasarela de pagos integrada"
    ]
  }
];
export default blogData;
