export const getAPI = () => {
  return window.location.hostname === 'localhost'
    ? 'http://localhost:3005'
    : 'https://afro-link-db.herokuapp.com';
    // return 'https://afro-link-db.herokuapp.com';
};
