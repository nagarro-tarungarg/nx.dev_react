// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { httpRequest, HTTPVerbs, logger, LogLevels } from '@amw-services/all';
import { useEffect, useState } from 'react';

function App() {
  const [res, setRes]: any = useState();

  // try {
  //   // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  //   a.aaaa;
  // } catch (err: any) {
  //   logger.log({ level: LogLevels.WARN, data: err });
  // }
  useEffect(() => {
    httpRequest({
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      method: HTTPVerbs.GET,
    }).then((res: any) => setRes(res));
  }, []);

  return (
    <>
      <h1>I am from Product app</h1>
      <div>{JSON.stringify(res)}</div>);
    </>
  );
}

export { App };
