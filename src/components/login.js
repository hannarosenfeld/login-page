import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <div class="login-window">
        <h1>Log in</h1>
        <form
          class="login-fields"
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/app/profile`)
          }}
        >
          <label>
            <input type="text" name="username" placeholder="username"onChange={this.handleUpdate} />
          </label>
          <label>
            <input
              type="password"
              name="password"
        onChange={this.handleUpdate}
        placeholder="password"
            />
          </label>
          <input class="submit-button"type="submit" value="Log In" />
        </form>
      </div>
    )
  }
}

export default Login
