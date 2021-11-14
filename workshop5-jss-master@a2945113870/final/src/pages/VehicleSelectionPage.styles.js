import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 15,
    padding: 5,
    '& a': {
      textDecoration: 'none'
    }    
  },
  media: {
    height: 140,
  },
});
