import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import PostCreatePage from './pages/PostCreatePage'
import PostDetailPage from './pages/PostDetailPage'
import PostListPage from './pages/PostListPage'
import RegisterPage from './pages/RegisterPage'
import { UserContext } from './contexts/UserContexts'
import { PostContext } from './contexts/PostContexts'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [categories, setCategories] = useState(null)
  const [countries, setCountries] = useState(null)
  const [postsList, setPostsList] = useState(null)

  return (
    <div className='container center-block'>

      <UserContext.Provider value={{
        currentUser, setCurrentUser
      }}>
        <PostContext.Provider value={{
          categories, setCategories,
          countries, setCountries,
          postsList, setPostsList
        }}>
          <Switch>

            <Route path='/register' component={RegisterPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/' component={LoginPage} />

            <ProtectedRoute path='/homepage' component={HomePage} exact />
            <ProtectedRoute path='/createpost' component={PostCreatePage} exact />
            <ProtectedRoute path='/posts/:id' component={PostDetailPage} exact />
            <ProtectedRoute path='/posts' component={PostListPage} exact />

          </Switch>
        </PostContext.Provider>
      </UserContext.Provider>

    </div>
  );
}

export default App;
