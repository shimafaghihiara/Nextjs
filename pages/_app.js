import '../styles/globals.css';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Theme from "../src/theme/index";

export default ({Component,pageProps})=>{
  return <ThemeProvider theme={Theme.default}><Component {...pageProps} /></ThemeProvider>
};
