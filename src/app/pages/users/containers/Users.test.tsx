import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import appReducer from '@app/app.reducers';
import '@testing-library/jest-dom/extend-expect';
import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { Routes, Route, MemoryRouter, BrowserRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import appMiddleware from '@app/app.middleware';
import Users from './Users';
const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496'
            }
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
          }
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
              lat: '-43.9509',
              lng: '-34.4618'
            }
          },
          phone: '010-692-6593 x09125',
          website: 'anastasia.net',
          company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
          }
        },
        {
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
        },
        {
          id: 4,
          name: 'Patricia Lebsack',
          username: 'Karianne',
          email: 'Julianne.OConner@kory.org',
          address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
              lat: '29.4572',
              lng: '-164.2990'
            }
          },
          phone: '493-170-9623 x156',
          website: 'kale.biz',
          company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
          }
        }
      ])
    );
  })
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
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate
}));

describe('List users component', () => {
  describe('Test api list user success', () => {
    // const container: HTMLElement = document.querySelector('#list-user');
    test('List users screen not empty', async () => {
      render(<Users />, { wrapper: ReduxWrapper });
      expect(screen.getByTestId('loading')).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.queryByTestId('loading')).toBeNull();
      });
      expect(screen.getByTestId('user-item-1')).toBeInTheDocument();
      expect(screen.getByTestId('user-item-2')).toBeInTheDocument();
      expect(screen.getByTestId('user-item-3')).toBeInTheDocument();
      expect(screen.getByTestId('user-item-4')).toBeInTheDocument();
    });

    test('Move to detail', async () => {
      render(<Users />, { wrapper: ReduxWrapper });
      await waitFor(() => {
        // expect(screen.getByText('Patricia Lebsack')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('detail-user-1'));
        expect(mockedUsedNavigate).toBeCalled();
      });
    });

    test('Test delete user', async () => {
      render(<Users />, { wrapper: ReduxWrapper });
      expect(screen.getByTestId('loading')).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.getByTestId('users')).toBeInTheDocument();
      });
      fireEvent.click(screen.getByTestId('del-user-1'));
      expect(screen.queryByTestId('user-item-1')).not.toBeInTheDocument();
    });
  });

  describe('Test api list user failed', () => {
    test('User list error', async () => {
      server.use(
        rest.get(
          'https://jsonplaceholder.typicode.com/users',
          (req, res, ctx) => {
            return res(ctx.status(500));
          }
        )
      );
      render(<Users />, { wrapper: ReduxWrapper });
      expect(screen.getByTestId('loading')).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.queryByTestId('loading')).toBeNull();
      });
      expect(screen.queryByTestId('error')).toBeInTheDocument();
    });
  });
});
