import logo from './logo.svg';
import './App.css';

function Header(props){
  console.log('props', props.title)
  return(
    <div>
      <header>
        <h1><a href="/">{props.title}</a></h1>
      </header>
    </div>
  )
}

function Article(props){
return(
  <article>
  <h2>{props.title}</h2>
  {props.body}  
  </article>
)
}

function App() {
  return (
    <div className="App">
      <Header title="REACT"></Header>
      <Header />
      <Header />
      <nav>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
          <li><a href="/read/3">js</a></li>
        </ol>
      </nav>
      <Article title="Welcome"  body="Hello, Web"></Article>
      <Article title="Hi"  body="Hello, React"></Article>
    </div>
  );
}
export default App;
