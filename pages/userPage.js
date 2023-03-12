import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Button, Card, Image,Message,Container} from "semantic-ui-react";
import Router from "next/router"

import { useRouter } from "next/router";
import { Link } from "next/link";
import helpers from "../helper";
const axios = require("axios");
import LineChart from "../components/Linchar";

const userPage = () => {
    return (
        <Layout>
        <LineChart/>
        </Layout>
    )

}

export default userPage