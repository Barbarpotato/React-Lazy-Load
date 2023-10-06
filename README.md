# React-Lazy-Load
React Lazy Load is a technique used to load React components lazily, i.e., only when they are needed. This helps reduce the initial bundle size and improve the performance of your React application. You can easily implement lazy loading in your React project using `React.lazy()` along with `Suspense`.

## Real-World Case
![alt images](/git-image/Scenario.png)

When building a dashboard application. This application has high complexity and requires a large size to be loaded by application users in the future. For example, the dashboard application has several different features, depending on the position of each application user. for example, users with the admin position have a different features in the application compared to users with other positions, for example Sales. When Sales enters a dashboard application. Of course, the features contained in admin will not appear for users with sales positions, BUT users with sales positions will still load the features contained in admin even though they are not used. Vice Versa, This affects the performance, speed and efficiency of an application running.

## Solution
To asnwer the prbolem above, we will be use `Lazy Load` technique, you can optimize the initial loading time and improve the performance of your React application by dynamically loading components as needed.

## Usage
Here are the steps on how to use React Lazy Load in your project:

### Create the routes for the web page.

We have 3 different pags for this case, Main page which can be access for all the role position (Admin, Sales). we have the sales component which can be access by sales person, and the last page is the admin page, where it can only be access by the admin person.

```jsx
import { Routes, Route } from 'react-router-dom'
import Sales from './pages/Sales'
import Home from './pages/Home'
import Admin from './pages/Admin'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/sales' element={<Sales />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  )
}

export default App
```
`If we dont implement the lazy load technique in our react application. it will be load all three pages. which are Main, Sales and the Admin page`

`If we implement the lazy load, whenever we access the Sales Page, it will be load the Main and the Sales Page, Vice Versa.`

### Applied the Lazy Load to your React App
After build the different page and route, we can implement the lazy load by using the `lazy` and `Suspense`
```jsx
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from './pages/Home'
import './App.css'

const Admin = lazy(() => import('./pages/Admin'))
const Sales = lazy(() => import('./pages/Sales'))

function App() {

  return (
    <Routes>

      <Route index element={<Home />} />

      <Route path='/sales' element={
        <Suspense fallback={<div>Loading Content...</div>}>
          <Sales />
        </Suspense>} />

      <Route path='/admin' element={
        <Suspense fallback={<div>Loading Content...</div>}>
          <Admin />
        </Suspense>} />

    </Routes >
  )
}

export default App
```
### Implementation Result
Now, if you go to the Dev Console -> Source. You need to check the page source file. and then check the src folder -> pages . We cannot see our Admin and Sales Component. If we accessing the admin route or the sales route, it will appear in the source dev console. which means that our lazy load implement successfully.

`Case the user is not accessing the Admin page. The Admin File is not loaded, reduce the initial bundle`
![alt images](/git-image/lazy-load.png)

`Case the user is accessing the Admin page. the Admin component will be added to the bundle size`
![alt images](/git-images/lazy-load2.png)
