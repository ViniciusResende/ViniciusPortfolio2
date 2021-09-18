const getNextApiUrl = () =>
  process.env.NODE_ENV === 'production'
    ? `${document.location.protocol}//${document.location.hostname}/api`
    : `${document.location.protocol}//${document.location.hostname}:${document.location.port}/api`;

export default getNextApiUrl;
