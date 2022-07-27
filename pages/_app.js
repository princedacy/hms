import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import BusinessProfile from "../components/BusinessProfile";
function MyApp({ Component, pageProps }) {
  const Layout = ({ Component, pageProps }) => {
    if (Component.getLayout) {
      return Component.getLayout(
        <Component
          className="mid-section bg-[#f5f9ff] sm:w-5/6 md:w-5/6 w-4/6 p-6"
          {...pageProps}
        />
      );
    } else {
      return (
        <Component
          className="mid-section bg-[#f5f9ff] sm:w-5/6 md:w-5/6 w-4/6 p-6"
          {...pageProps}
        />
      );
    }
  };
  return (
    <div className="w-full flex">
      <Sidebar />
      <Layout
        className="mid-section bg-[#f5f9ff] sm:w-5/6 md:w-5/6 w-4/6 p-6"
        Component={Component}
        pageProps={pageProps}
      />
      <aside className="sm:hidden md:hidden w-1/6 p-6 border-l border-primary-gray">
        <BusinessProfile />
      </aside>
    </div>
  );
}

export default MyApp;
