export interface RouterObj {
  path: string;
  src: string;
  name?: string;
  children?: RouterObj[];
}

const routerList: RouterObj[] = [
  {
    path: "/main",
    src: "main",
    children: [
      {
        path: "shop-manage",
        src: "shop-manage",
        children: [
          {
            path: "order",
            name: "订单管理",
            src: "shop-manage/order"
          },
          {
            path: "refund",
            name: "仅退款管理",
            src: "shop-manage/refund"
          },
          {
            path: "refund-goods",
            name: "退货退款管理",
            src: "shop-manage/refund-goods"
          }
        ]
      },
      {
        path: "lottery-manage",
        src: "lottery-manage",
        children: [
          {
            path: "lottery-list",
            name: "订单管理",
            src: "lottery-manage/lottery-list"
          }
        ]
      }
    ]
  }
];

export default routerList;
