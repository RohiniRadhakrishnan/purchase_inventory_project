const Cloudant = require('@cloudant/cloudant');
var url =
  'https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/';
var username = 'apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
var password = '3bc2893c0a2a1ec42d9b17840b18447b';

var cloudant = Cloudant({ url: url, username: username, password: password });
insert = function (paramsvalue) {
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

get = function (admindata, dbname) {
  return cloudant.use(dbname).find(admindata);
};

getId = function (id, dbname) {
  return cloudant.use(dbname).get(id);
};
del_id = function (id, id1, dbname) {
  return cloudant.use(dbname).destroy(id, id1);
};
module.exports = { get, getId, insert, del_id };
