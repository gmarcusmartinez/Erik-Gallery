import Navigation from "../components/Navigation";
import { wrapper } from "../store";
import { END } from "redux-saga";
import "../styles/main.global.scss";

const EmptyLayout = ({ children }) => <>{children}</>;

const AppComponent = ({ Component, pageProps }) => {
  const Layout = Component.Layout || EmptyLayout;

  return (
    <Layout>
      <Navigation />
      <Component {...pageProps} />
    </Layout>
  );
};

AppComponent.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };

  if (ctx.req) {
    ctx.store.dispatch(END);
    await ctx.store.sagaTask.toPromise();
  }

  return { pageProps };
};

export default wrapper.withRedux(AppComponent);
