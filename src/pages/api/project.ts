import type { NextApiRequest, NextApiResponse } from 'next';

import projects from './Data/projects.json';
import { ProjectData } from '../../utils/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectData>,
) {
  const { projectId } = req.query;
  //ts-ignored because the query is controlled by inter code
  //@ts-ignore
  const responseProject = projects[projectId];

  res.status(200).json(responseProject);
}
