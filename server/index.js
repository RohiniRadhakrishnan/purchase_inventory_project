const express = require('express');
const connection = require('express');
const bodyparser = require('body-parser');
const app = connection();
app.use(express.static('public'));
const port = 8000;

const cors = require('cors');
const dbconnection = require('./db');
app.use(express.static('public'));
app.use(connection.static('public'));
app.use(bodyparser.json());
app.use(
  cors({
    origin: 'http://localhost:4200',
  })
);

app.post('/postquery', (request, _response) => {
  console.log(request);
  let object = {
    username: request.body.username,
    phone: request.body.phone,
    email: request.body.email,
    address: request.body.address,
    password: request.body.password,
    type: 'userid',
  };

  dbconnection.insert(object);
});

app.get('/getUser', (request, response) => {
  console.log(request);
  let data = {
    selector: {
      type: 'userid',
    },
  };
  dbconnection.get(data, 'rohini-trainee').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});
app.get('/getUserId/:id', (request, response) => {
  dbconnection.getId(request.params.id, 'rohini-trainee').then((_3res) => {
    if (res) {
      response.send(_3res);
    } else {
      response.send('error');
    }
  });
});

app.delete('/delete/:id/:id1', (request, response) => {
  dbconnection
    .del_id(request.params.id, request.params.id1, 'rohini-trainee')
    .then((_4res) => {
      if (res) {
        response.send(_4res);
      } else {
        response.send('error');
      }
    });
});

app.get('/getadmin', (request, response) => {
  console.log(request);
  let data = {
    selector: {
      type: 'adminid',
    },
  };
  dbconnection.get(data, 'rohini-trainee').then((_2res) => {
    if (res) {
      response.send(_2res);
    } else {
      response.send('error');
    }
  });
});
app.get('/getadminId/:id', (request, response) => {
  dbconnection.getId(request.params.id, 'rohini-trainee').then((_1res) => {
    if (res) {
      response.send(_1res);
    } else {
      response.send('error');
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});

app.post('/getUsers', (request, response) => {
  console.log(request);
  let data = {
    selector: {
      username: request.username,
      password: request.password,
    },
  };
  dbconnection.get(data, 'rohini-trainee').then((_res) => {
    if (res) {
      response.send(_res);
    } else {
      response.send('error');
    }
  });
});
