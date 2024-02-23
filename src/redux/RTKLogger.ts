import {Middleware} from '@reduxjs/toolkit';

export const RTKLogger: Middleware = () => next => action => {
  if (action?.meta?.baseQueryMeta?.request) {
    // console.log(
    //   'API Request -->',
    //   JSON.stringify({
    //     data: action?.meta?.baseQueryMeta?.request,
    //   }),
    // );
  }
  if (action?.meta?.baseQueryMeta?.response) {
    console.log(
      'API Response -->',
      JSON.stringify({
        data: action?.meta?.baseQueryMeta?.response,
      }),
    );
  }

  return next(action);
};
