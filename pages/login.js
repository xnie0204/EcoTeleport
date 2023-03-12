import React, { Component } from "react";
import Layout from "../components/Layout";
import { useState} from "react"
import LoginForm from '../components/LoginForm'
import { Button, Card, Image,Message,Container} from "semantic-ui-react";
const axios = require('axios').default;
axios.defaults.withCredentials = true

function LoginIndex () {
 
        return (
            <section style={{
                backgroundImage:
                `url('/background.png')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}>
          <Layout>
            
            <div style = {{marginTop: 50, marginBottom: 1000}}>
        < LoginForm />
        </div>
          </Layout>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          </section>

        );
    }

export default LoginIndex