export interface INavList {
  link: string;
  label: string;
  isPublic: boolean;
}

export const NavList: INavList[] = [
  {
    link: "/home",
    label: "Главная",
    isPublic: true,
  },
  {
    link: "/catalog",
    label: "Каталог",
    isPublic: true,
  },
  // {
  //   link: "/library",
  //   label: "Библиотека",
  //   isPublic: true,
  // },
  // {
  //   link: "/wishlist",
  //   label: "Список желаний",
  //   isPublic: false,
  // },
  {
    link: "/library",
    label: "Библиотека",
    isPublic: false,
  },

  {
    link: "/cart",
    label: "Корзина",
    isPublic: true,
  },
];

export const UserNavList: INavList[] = [
  {
    link: "/profile",
    label: "Профиль",
    isPublic: false,
  },
];
