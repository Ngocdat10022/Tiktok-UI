import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRouter } from './routes/index'
import { DefaultLayout } from './components/Layouts';
function App() {
  return (
    <Router>
      <Routes>
        {publicRouter.map((route, index) => {
          const Page = route.component
          let Layout = DefaultLayout
          if (route.Layout) {
            Layout = route.Layout
          } else if (route.Layout === null) {
            Layout = Fragment
          }
          return <Route key={index} path={route.path} element={<Layout><Page /></Layout>}/>
        })}
      </Routes>
    </Router>
  )
}
export default App;