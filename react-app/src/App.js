import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/LoginFormModal/LoginForm';
import SignUpForm from './components/SignupFormModal/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import UploadPicture from './file_upload/UploadPicture';
import ViewImages from './file_upload/ViewImages';
import SingleProjectPage from './components/SingleProjectPage'
import CreateNewComment from './components/CommentsForm';
import CommentsList from './components/ProjectComments';
import AllProjects from './components/AllProjects';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true} >
          <AllProjects />
        </Route>
        {/* <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route> */}
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/upload' exact={true} >
          <UploadPicture/>
        </ProtectedRoute>
        <Route path='/images' exact={true}>
          <ViewImages />
        </Route>
        <Route path="/projects/:projectId">
          <SingleProjectPage />
          </Route>
        <Route path="/comments">
          <CommentsList />
        </Route>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
