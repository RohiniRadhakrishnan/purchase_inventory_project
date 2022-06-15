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
app.post('/postquery', function (req, res) {
  const userObject = {
    username: req.body.username,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    password: req.body.password,
    role: req.body.role,
    type: 'user',
  };
  console.log('data from angular', userObject);
  dbconnection.insert(userObject).then(
    (data) => {
      console.log('register successfully ', data);
      let data1;
      if (data['id']) {
        data1 = {
          message: 'Registered Successfully',
          status: 'success',
          response: data,
        };
      }
      res.send(data1);
    },
    (err) => {
      console.log(err);
      res.status(400).send({
        message: 'failed to register',
        status: 'error',
        error: err,
      });
    }
  );
});

app.get('/getUser', (request, response) => {
  console.log(request);
  let data = {
    selector: {
      type: 'user',
    },
  };
  dbconnection
    .get(data, 'rohini-trainee')
    .then((res) => {
      if (res) {
        response.send(res);
      } else {
        response.send('error');
      }
    })
    .catch((err) => {
      console.log('UserNot exist!!!', err);
    });
});
app.get('/getUserId/:id', (request, response) => {
  dbconnection
    .getId(request.params.id, 'rohini-trainee')
    .then((_3res) => {
      if (res) {
        response.send(_3res);
      } else {
        response.send('error');
      }
    })
    .catch((err) => {
      console.log('UserNot exist!!!', err);
    });
});

app.delete('/delete/:id/:id1', (request, response) => {
  dbconnection
    .del_id(request.params.id, request.params.id1, 'rohini-trainee')
    .then((_4res) => {
      console.log(_4res);
      if (_4res) {
        response.send(_4res);
      } else {
        response.send('error');
      }
    })
    .catch((err) => {
      console.log('UserNot exist!!!', err);
      response.end(err);
    });
});

app.get('/getadmin', (request, response) => {
  console.log(request);
  let data = {
    selector: {
      type: 'user',
    },
  };
  dbconnection
    .get(data, 'rohini-trainee')
    .then((_2res) => {
      if (res) {
        response.send(_2res);
      } else {
        response.send('error');
      }
    })
    .catch((err) => {
      console.log('UserNot exist!!!', err);
    });
});
app.get('/getadminId/:id', (request, response) => {
  dbconnection
    .getId(request.params.id, 'rohini-trainee')
    .then((_1res) => {
      if (res) {
        response.send(_1res);
      } else {
        response.send('error');
      }
    })
    .catch((err) => {
      console.log('UserNot exist!!!', err);
    });
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
