import '../styles/globals.css';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Theme from "../src/theme/index";
import Layout from "../src/component/layout/Layout"

export default ({Component,pageProps})=>{
  return <ThemeProvider theme={Theme.default}>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
};
