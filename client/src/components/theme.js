import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

//currently, colors are stock; update that

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#BABCBC",
    },
    secondary: {
      main: "#FF0038",
    },
  },
});

export default theme