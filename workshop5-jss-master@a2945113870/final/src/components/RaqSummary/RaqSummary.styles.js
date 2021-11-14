import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: '380px',
    [theme.breakpoints.down('sm')]: {
      margin: '40px 0'
    }
  },
  raqImage: {
    maxWidth: '380px'
  }
}));
