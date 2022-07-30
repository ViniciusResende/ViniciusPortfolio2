const getNextApiUrl = () =>
  process.env.NODE_ENV === 'production'
    ? `${window.location.protocol}//${window.location.hostname}/api`
    : `http://localhost:3000/api`;

export default getNextApiUrl;
