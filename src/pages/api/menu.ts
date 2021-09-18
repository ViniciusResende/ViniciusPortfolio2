// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import MenuItems from './defaultData/menuItems.json';

type MenuItemData = {
  name: string;
  path: string | null;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<MenuItemData[]>,
) {
  res.status(200).json(MenuItems.items);
}
