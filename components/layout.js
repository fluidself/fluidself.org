import Navigation from './navigation';

function Layout(props) {
  return (
    <div className="container">
      <Navigation />
      <main className="main-wrapper" role="main">
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
