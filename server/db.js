let Cloudant = require('@cloudant/cloudant');
let { type } = require('express/lib/response');
let url =
  'https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/';
const userCred = {
  username: 'apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn',
  userpassword: '3bc2893c0a2a1ec42d9b17840b18447b',
};
let cloudant = Cloudant({
  url: url,
  username: userCred.username,
  password: userCred.userpassword,
});

let insert = function (paramsvalue) {
  console.log(paramsvalue);
  return cloudant.use('rohini-trainee').insert(paramsvalue);
};

let get = function (admindata, dbname) {
  return cloudant.use(dbname).find(admindata);
};

let getId = function (id, dbname) {
  return cloudant.use(dbname).get(id);
};
let del_id = function (id, id1, dbname) {
  return cloudant.use(dbname).destroy(id, id1);
};
module.exports = { get, getId, insert, del_id };
