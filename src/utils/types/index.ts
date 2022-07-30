type TechnologyItem = {
  name: string;
  icon:
    | 'react'
    | 'next'
    | 'nodejs'
    | 'sass'
    | 'styledComponents'
    | 'typescript'
    | 'javascript'
    | 'sqlite'
    | 'mongo'
    | 'expo'
    | 'firebase'
    | 'graphql'
    | 'apollographql'
    | 'express';
};

export type ProjectData = {
  key: string;
  name: string;
  description: string;
  img: string;
  technologies: TechnologyItem[];
  githubRepo: string;
  linkedinPost?: string;
};
