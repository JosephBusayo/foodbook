import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  toolbar : {
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  cardGrid:{
    padding: '20px 0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cards: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia :{
    paddingTop : '56.25%' //16:9
  },
  cardContent : {
    flexGrow : 1
  },
  footer :{
    backgroundColor : theme.palette.background.paper,
    padding: '50px 0'
  }
}));

export default useStyles
