const WEB_ADDRESS_REGEX = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z0-9]{1,}){1,3}(:[0-9])?(#?\/?[a-zA-Z0-9#_-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?.*)?$/gm;
const isWebAddress = (url: string = ''): boolean => {
  return Boolean(url.match(WEB_ADDRESS_REGEX));
};

export default isWebAddress;
