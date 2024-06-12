export const portfolio = [
  {
    id: "01",
    title: "Easy Wallet App",
    img: "/images/app.jpg",
    category: "Web",
    keyword: ["React Native", "Expo", "Tailwind CSS", "React Query", "Axios"],
    liveUrl: "https://github.com/JoseDun/app-wallet",
  },

  {
    id: "02",
    title: "Back Office Easy Wallet",
    img: "/images/wallet.jpeg",
    category: "Web",
    keyword: ["React JS", "React Query", "Axios", "Bootstrap", "Mui"],
    liveUrl: "https://github.com/JoseDun/wallet-back-office",
  },
  {
    id: "03",
    title: "Landing Page Easy Wallet",
    img: "/images/landing.webp",
    category: "Web",
    keyword: ["Next.js", "Responsive Design"],
    liveUrl: "https://github.com/JoseDun/landing-page",
  },
  {
    id: "04",
    title: "Ecommerce Vanilla",
    img: "/images/ecommerce-vanilla.jpg",
    category: "Web",
    keyword: ["JavaScript vanilla", "Responsive Design"],
    liveUrl: "https://github.com/JoseDun/ecommerce-vanilla",
  },
];

export const getPortfolioData = () => {
  return portfolio;
};
