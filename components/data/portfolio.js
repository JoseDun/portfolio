export const portfolio = [
  {
    id: "01",
    title: "Wallet app",
    img: "/images/app.jpg",
    category: "Mobile App",
    keyword: ["React Native", "Expo", "Tailwind CSS", "React Query", "Axios"],
    liveUrl: "https://github.com/JoseDun/app-wallet",
  },

  {
    id: "02",
    title: "Back office",
    img: "/images/wallet.jpeg",
    category: "Web",
    keyword: ["React JS", "React Query", "Axios", "Bootstrap", "Mui"],
    liveUrl: "https://github.com/JoseDun/wallet-back-office",
  },
  {
    id: "03",
    title: "Landing page",
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
