import { Redirect, Route, Switch } from 'react-router-dom';
import NewQuote from './pages/NewQuote';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/new' exact>
          <NewQuote />
        </Route>
        <Route path='/quotes/:id'>
          <QuoteDetail />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
