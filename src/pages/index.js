import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import ToDoList from "../components/todo"
import Layout from "../components/layout"

export default function Home() {
  return (
      <Layout>
      <div class="home-window">
      <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/app/profile">profile</Link>
            <ToDoList />
            </>
        ) : (
            <>
            You should <Link to="/app/login">log in</Link> to see restricted
            content
            </>
        )}
      </p>
      
      </div>
      </Layout>
  )
}
