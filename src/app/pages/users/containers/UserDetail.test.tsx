import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import appReducer from '@app/app.reducers';
import '@testing-library/jest-dom/extend-expect';
import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import appMiddleware from '@app/app.middleware';
import UserDetail from './UserDetail';
const server = setupServer(
  rest.get(
    'https://jsonplaceholder.typicode.com/users/:id',
    (req, res, ctx) => {
      return res(
        ctx.json({
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
          address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
              lat: '-68.6102',
              lng: '-47.0653'
            }
          },
          phone: '1-463-123-4447',
          website: 'ramiro.info',
          company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
          }
        })
      );
    }
  )
);

const middleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(middleware, logger));

const ReduxWrapper = ({ children }) => {
  middleware.run(appMiddleware);
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

beforeAll(() => server.listen());
afterAll(() => server.close());

describe('User detail component', () => {
  describe('Test api detail user success ', () => {
    test('Render user', async () => {
      render(<UserDetail />, { wrapper: ReduxWrapper });
      expect(screen.getByTestId('loading')).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
        expect(screen.getByTestId('user-detail')).toBeInTheDocument();
        expect(screen.getByText('Username: Samantha')).toBeInTheDocument();
      });
    });
  });

  describe('Test api detail user failed', () => {
    test('Detail user failed', async () => {
      server.use(
        rest.get(
          'https://jsonplaceholder.typicode.com/users/:id',
          (req, res, ctx) => {
            return res(ctx.status(500));
          }
        )
      );
      render(<UserDetail />, { wrapper: ReduxWrapper });
      expect(screen.getByTestId('loading')).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
      });
      expect(screen.queryByTestId('error')).toBeInTheDocument();
    });
  });
});
