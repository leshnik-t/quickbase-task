import './App.scss';
import useFetch from './hooks/useFetch';
import Wrapper from './components/wrapper/Wrapper';
import CardsContainer from './components/cardsContainer/CardsContainer';

function App() {
  const {data, fetchError, isLoading} = useFetch('./data/dataset1.json');
  
  return (
    <div className="App">
        <header></header>
        <main>
          <Wrapper>
            {isLoading && <p>Loading....</p>}
            {fetchError && <p>{fetchError}</p>}
            {!isLoading && !fetchError && data &&
              <CardsContainer data={data} />
            }
          </Wrapper>
        </main>
        <footer></footer>
    </div>
  );
}

export default App;
