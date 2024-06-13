import { Outlet } from "react-router";
import Navbar from "./Navigation_Bar/Navbar";
import React, { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import authservice from "../appwrite/auth"; // Adjust the path according to your file structure
import { loginstore } from "../store/AuthSlice";


function Layout() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkCurrentUser() {
      try {
        const user = await authservice.getcurrentuser();
        if (user) {
          dispatch(loginstore(user));
        }
      } catch (error) {
        //console.error('Error fetching current user', error);
      } finally {
        setLoading(false);
      }
    }

    checkCurrentUser();
  }, []);

  if (loading) {
    <Container className="d-flex vh-100">
    <Row className="m-auto align-self-center">
      <Col className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Col>
    </Row>
  </Container>
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
