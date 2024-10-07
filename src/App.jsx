import React from 'react';
import logo from './assets/logo.png';
import HomePage from './pages/HomePage';
import {Routes, Route, Link} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ThreadDetail from './pages/ThreadDetail';
import Loading from './components/Loading';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import UserDetail from './pages/UserDetail';
import {asyncPreloadProcess} from './states/isPreload/action';
import CreateThread from './pages/CreateThread';
import RegisterPage from './pages/RegisterPage';

function Appp() {
  const {
    authUser = null,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (authUser === null) {
    return (
      <>
        <div className='container' >
          <header className='navbar-container'>
            <Link to={'/'}><img src={logo} className='logo' alt="logo" /></Link>
            <nav className="nav-list">
              <ul>
                <li>
                  <a href="#">Buat Postingan</a>
                </li>
                <li>
                  <Link to={'/login'}>Masuk</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Loading />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/thread/:id" element={<ThreadDetail />} />
            </Routes>
          </main>
        </div>
      </>

    );
  }

  return (
    <>
      <div className='container' >
        <header className='navbar-container'>
          <Link to={'/'}><img src={logo} className='logo' alt="logo" /></Link>
          <nav className="nav-list">
            <ul>
              <li>
                <Link to={'/thread/new'}>Buat Postingan</Link>
              </li>
              <li>
                <Link to={'/user'}>{authUser.name}</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Loading />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/thread/:id" element={<ThreadDetail />} />
            <Route path="/user" element={<UserDetail />} />
            <Route path="/thread/new" element={<CreateThread />} />
          </Routes>
        </main>
      </div>
    </>

  );
}


export default App;
