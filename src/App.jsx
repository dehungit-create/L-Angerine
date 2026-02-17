import { Route, Routes } from "react-router-dom"

import Header from "./Header"
import HomePage from "./HomePage"
import Products from "./Products"
import Team from "./Team"
import Footer from "./Footer"
import Project from "./Project"
import Home from "./Home"
import NavItem from "./NavItem"

import ScrollToTop from "./ScrollToTop"
import PageWrapper from "./PageWrapper"

function App() {
  return (
    <>
      <Header />

      <ScrollToTop />

      <main className="mt-15 min-h-screen">
        <Routes>

          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />

          <Route
            path="/project"
            element={
              <PageWrapper>
                <Project />
              </PageWrapper>
            }
          />

          <Route
            path="/products"
            element={
              <PageWrapper>
                <Products />
              </PageWrapper>
            }
          />

          <Route
            path="/team"
            element={
              <PageWrapper>
                <Team />
              </PageWrapper>
            }
          />

        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
