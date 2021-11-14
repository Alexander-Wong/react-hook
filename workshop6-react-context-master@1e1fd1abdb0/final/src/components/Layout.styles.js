import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  darkSwitchContainer: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    textAlign: 'center',
    backgroundColor: 'grey'
  },
  layout: {
    marginBottom: 50,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  }
}));
