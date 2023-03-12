import React, { Component } from "react";
import Layout from "../components/Layout";
import { useState} from "react"
import LoginForm from '../components/LoginForm'
import { Button, Card, Image,Message,Container} from "semantic-ui-react";
const axios = require('axios').default;
axios.defaults.withCredentials = true

function LoginIndex () {
 
        return (
          <Layout>
        < LoginForm />
          </Layout>
        );
    }

export default LoginIndex