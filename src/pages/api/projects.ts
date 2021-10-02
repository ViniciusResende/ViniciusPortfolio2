import type { NextApiRequest, NextApiResponse } from 'next';

import allProjects from './Data/allProjects.json';

type ProjectData = {
  id: string;
  name: string;
  description: string;
  img: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ProjectData[]>,
) {
  res.status(200).json(allProjects.items);
}
