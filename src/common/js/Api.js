//const baseURI = 'http://192.168.31.152:8080/cowrycare-iot';
const baseURI = 'https://cowrycare.com';
const APIURI = baseURI + "/api";
const OSSURI = baseURI + "/oss";

const API = {
  "baseURI": baseURI,
  login: baseURI + '/login',
  checksession: baseURI + "/checksession",
  userinfo: APIURI + '/userinfo',
  dict: APIURI + '/dict',
  device: APIURI + '/device',
  register: APIURI + "/register",
  index: APIURI + "/index",
  mox: APIURI + "/mox",
  disease: APIURI + "/disease",
  acupoint: APIURI + "/acupoint",
  therapy: APIURI + "/therapy",
  address: APIURI + "/address",
  phone: APIURI + "/phone",
  search: APIURI + "/search",
  sku: APIURI + "/sku",
  cowry: APIURI + "/cowry",
  inv: APIURI + "/inv",
  order: APIURI + "/order",
  logistics: APIURI + "/logistics",
  oss: OSSURI,
  about: OSSURI + "/about.html",
  contact: OSSURI + "/contact.html",
  access: APIURI + "/access",
  share: APIURI + "/share",
  comment: APIURI + "/comment",
};
export default API;