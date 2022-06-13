const Cloudant = require('@cloudant/cloudant');
let url =
  'https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/';
let username = 'apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
let password = '3bc2893c0a2a1ec42d9b17840b18447b';
let cloudant = Cloudant({ url: url, username: username, password: password });

let insert = function (paramsvalue) {
  console.log(paramsvalue);
  cloudant
    .use('rohini-trainee')
    .insert(paramsvalue)
    .then((data) => {
      console.log('Data Inserted into Cloud database' + data);
    })
    .catch((err) => {
      console.log(err);
    });
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
