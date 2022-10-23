export function mapPathToMenu(menus: any[], path: string) {
  for (const menu of menus) {
    const currentMenu = menu?.children?.find((submenu: any) => path === submenu.url);
    if (currentMenu) return currentMenu;
  }
}


export const userMenus = [
  {
    id: "1",
    name: "商店管理",
    icon: "ShoppingBag",
    children: [
      { id: "1-1", name: "商品订单", url: "/main/shop-manage/order" },
      { id: "1-2", name: "退款管理", url: "/main/shop-manage/refund" },
      { id: "1-3", name: "退货管理", url: "/main/shop-manage/refund-goods" }
    ]
  },
  {
    id: "2",
    name: "抽奖活动管理",
    icon: "Wallet",
    children: [
      { id: "2-1", name: "抽奖活动列表", url: "/main/lottery-manage/lottery-list" },
    ]
  }
];
