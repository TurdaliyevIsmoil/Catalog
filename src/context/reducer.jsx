export default (state, { payload, type }) => {
  switch (type) {
    case "news": {
      return { ...state, news: payload };
    }
    case "home": {
      return { ...state, home: payload };
    }
    case "catalogs": {
      return { ...state, catalogs: payload };
    }
    case "topProducts": {
      return { ...state, topProducts: payload };
    }
    case "list": {
      return { ...state, list: payload };
    }
  }
};
