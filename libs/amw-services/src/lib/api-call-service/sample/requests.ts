import { httpRequest } from '../httpRequest';
import { HTTPVerbs } from '../types/httpTypes';

const error404Handler = () => {
  console.log('404 Error!!');
};
const error500Handler = () => {
  console.log('500 Error!!');
};

const GetRequest = {
  url: '',
  params: {
    id: 1,
    page: 2,
  },
  method: HTTPVerbs.GET,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer [token]',
  },
  customCache: true, // cahce is only for GET method
  log: true, // log the request before go
  errorHandlers: {
    404: error404Handler,
    500: error500Handler,
  },
  retries: 2,
};

const PostRequest = {
  url: '',
  params: {
    id: 1,
    page: 2,
  },
  method: HTTPVerbs.POST,
  headers: {
    'Content-Type': 'application/json',
    Autorization: 'Bearer [token]',
    UniqId: 'Idempotancy Uniq Id',
  },
  log: true, // log the request before go
  body: {
    test: 'test',
  },
  errorHandlers: {
    404: error404Handler,
    500: error500Handler,
  },
  retries: 2,
};

const sampleRequest = () => {
  httpRequest(GetRequest)
    .then((res) => {
      console.log(res);
      return console.log('res===> ', res);
    })
    .catch((error) => {
      console.error('error ', error);
    });
};

export { GetRequest, PostRequest };
