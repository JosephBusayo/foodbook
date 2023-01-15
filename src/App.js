import {useState, useEffect} from 'react'
import { 
  Typography, AppBar, Card, CardContent, CardMedia, 
  CssBaseline, Grid, Toolbar,Container
} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import useStyles from './style'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import './App.css'



const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i="

function App() {
  const [searchItem, setSearchItem] = useState("")
  const [message, setMessage] = useState("")
  const [data, setData] = useState([])
  const classes = useStyles()

  useEffect(() => {
    if(message){
      const fetchData = async () =>{
        document.title = `${message} recipes`
        const response = await fetch(url + message)
        const responseData = await response.json()

        if(responseData.meals.length > 0){
          setData(responseData.meals)
        }else{
          console.log("Not found")
        }
      }
      fetchData()
    }
  }, [message])

  function handleInput(event){ //listens for each letter the user clicks
    setSearchItem(event.target.value)
  }

  function handleSearch(e, term){ //the final input/word
    e.preventDefault()
    setMessage(term)
  }

  return (
    <section className="App">
      <CssBaseline />

      {/*NAVBAR STARTS*/}
      <AppBar position="static" >
        <Toolbar variant="dense" className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <FastfoodIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            FoodBook
          </Typography>
        </Toolbar>
      </AppBar>
      {/*NAVBAR ENDS*/}
      
      <main>
        <form onSubmit={(e) => handleSearch(e, searchItem)}>
          <input
            type="text"
            id="searchItem"
            onChange={handleInput}
            value={searchItem}
            placeholder="Enter an ingredient"
          />
          <input type="submit"/>
        </form>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {data.map((item) =>(
              <Grid item key={item.idMeal} xs={10} sm={6} md={4}>
                <Card className={classes.cards}>
                  <CardMedia className={classes.cardMedia} image={item.strMealThumb} title={`${item.strMeal} pic`} />
                  <CardContent> {item.strMeal} </CardContent>
                </Card>
              </Grid>
          ))}
          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
          You're just a search away
        </Typography>
      </footer>
    </section>

  );
}

export default App;