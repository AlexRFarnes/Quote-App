import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
3;
function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </>
  );
}

export default Layout;
