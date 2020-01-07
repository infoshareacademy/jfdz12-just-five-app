import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Drink from './Drink/Drink';
import { Navbar } from './navigation/Navigation';
import { Shops } from './shop-list/ShopList';
import { PageWrapper } from './wrapper/PageWrapper';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <PageWrapper>
          <Route
            path="/shops"
            component={Shops}
          />
          <Route
            path="/drinks"
            component={Drinks}
          />
        </PageWrapper>
        <Redirect to="/drinks" />
      </Switch>
    </BrowserRouter>
  );
}

class Drinks extends React.Component {

  state = {
    drinks: [],
    ingredients: []
  }



  componentDidMount() {
    fetch("./drinks.json").then(r => r.json()).then(data => {
      this.setState({
        drinks: data.drinks
      })
    })
    fetch("./ingredients.json").then(r => r.json()).then(data => {
      this.setState({
        ingredients: data.ingredients
      })
    })
  }

  render() {
    return (
      <div>
        Lista Drinków:
        <div>
          {
            this.state.drinks.map(drink => <Drink key={drink.id} name={drink.name} recipe={drink.recipe} />)
          }
        </div>

      </div>
    )
  }
}

export default App;
