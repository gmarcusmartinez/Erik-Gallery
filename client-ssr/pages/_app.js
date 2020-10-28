import Navigation from "components/Navigation";
import { Provider } from "react-redux";
import { useStore } from "store";
import "../styles/main.global.scss";

const EmptyLayout = ({ children }) => <>{children}</>;

const AppComponent = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  const Layout = Component.Layout || EmptyLayout;

  return (
    <Provider store={store}>
      <Layout>
        <Navigation />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

AppComponent.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };

  return { pageProps };
};

export default AppComponent;
