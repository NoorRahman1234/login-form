import React from "react";
import { useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {isLogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="email" placeholder="Enter your Email" />
              <input type="password" placeholder="Enter your password" />
              <a href="#">Forgot Password?</a>
              <button>Login</button>
              <p>
                Not a Member{" "}
                <a href="#" onClick={() => setIsLogin(false)}>
                  Signup now
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>Signup Form</h2>
              <input type="email" placeholder="Enter your Email" />
              <input type="password" placeholder="Enter your password" />
              <input type="password" placeholder="confirm password" />
              <button>Sign up</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
