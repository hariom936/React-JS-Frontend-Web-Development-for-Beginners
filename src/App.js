import React, {Component, useState, useEffect} from 'react';

const App = () => {
  // state
  const[news, setNews] = useState([])
  const[searchQurey, setSearchQurey] = useState('react')
  const [url, setUrl] = useState(`http://hn.algolia.com/api/v1/search?qurey=react`)
  const [loading, setloading] = useState(false);
  //fetch news
  const fetchNews = () => {
    //set loading true
    setloading(true)
    fetch(`url`)
    .then(result => result.json())
    //.then(data => console.log(data));
    .then(data => setNews(data.hits), setloading(false))
    .catch(error => console.log(error))
  };
  useEffect(() => {
    fetchNews();
  }, [url]);
  const handleChnage = (e) => {
    setSearchQurey(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault={};
   setUrl(`http://hn.algolia.com/api/v1/search?qurey=${searchQurey}`);
  }
  return(
    <div>
      <h2>News</h2>
      {loading? <h2>Loading..</h2> :"" }
      <form onSubmit={handleSubmit}>
          <input type="text" value ={searchQurey} onChange={handleChnage}/>
          <button>Search</button>
      </form>
      {news.map((n, i) => (<p key={i}>{n.title}</p>))}
    </div>
  )
};


/*const App = () =>{
  const [count, setCount] = useState(0) ;
  useEffect(()=> {
    document.title = `Clicked ${count} times`;
  });


  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Counter app</h2>
      <button onClick={increment}>
        Clicked {count} times</button>
    </div>
  );
};
*/
/*class App extends Component{
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  componentDidMount(){
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate(){
    document.title = `Clicked ${this.state.count} times`
  }
  render(){
    return (
      <div>
        <h2>Counter app</h2>
        <button onClick={this.increment}>
          Clicked {this.state.count} times</button>
      </div>
    );
  
  }
}*/



export default App;
