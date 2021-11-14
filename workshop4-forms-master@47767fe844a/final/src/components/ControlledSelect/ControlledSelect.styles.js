import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '80%'
    }
  },
  select: {
    textAlign: 'left'
  }
}));
