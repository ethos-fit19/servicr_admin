/*eslint-disable */
import React, { useEffect, useState } from 'react';
import './StatisticsPageComponent.scss';
import './widget.scss';
import AdminNavComponent from '../../components/AdminNavComponent/AdminNavComponent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CountUp from 'react-countup';
import Box from '@mui/material/Box';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

import {
  getUsers,
  getServiceproviders,
  getAppointments,
  loadCategories,
  getClients,
} from '../../services/AuthService';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

function StatisticsPageComponent() {
  const [users, setUsers] = useState([]);
  const [serviceproviders, setServiceproviders] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [categories, setCategories] = useState([]);
  const [clients, setClients] = useState([]);
  const [sumEarning, setSumEarning] = useState(0);

  useEffect(() => {
    GetUsers();
    GetServiceproviders();
    GetAppointments();
    GetCategories();
    GetClients();
  }, []);
  useEffect(() => {
    Calearnings();
  }, [appointments]);

  const GetUsers = async () => {
    try {
      const response = await getUsers();
      console.log(response.data.data);
      setUsers(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const GetServiceproviders = async () => {
    try {
      const response = await getServiceproviders();
      console.log(response.data.data);
      setServiceproviders(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const GetAppointments = async () => {
    try {
      const response = await getAppointments();
      console.log(response.data.data);
      setAppointments(response.data.data);
    } catch (e) {
      console.log(e);
    }
    Calearnings();
  };
  const GetCategories = async () => {
    try {
      const response = await loadCategories();
      console.log(response.data.data);
      setCategories(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  const GetClients = async () => {
    try {
      const response = await getClients();
      console.log(response.data.data);
      setClients(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  const Calearnings = () => {
    let earning = 0;
    appointments.map((appointment) => {
      earning += appointment.price;
    })
    console.log(earning)
    setSumEarning(earning)
  }

  return (
    <>
      <AdminNavComponent />
      <div className="StatisticsPage">
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
              {/* clients */}
              <div className="widget">
                <div className="left">
                  <span className="title">USERS</span>
                  <span className="counter">
                    {' '}
                    <CountUp duration={5} end={users.length} />
                  </span>
                  <HashLink
                    smooth
                    to="#users"
                    style={{ color: 'black', textDecoration: 'none' }}
                    className="admin_link"
                  >
                    <span className="link">See all users</span>
                  </HashLink>
                </div>
                <div className="right">
                  <div className="percentage positive"></div>
                  <PersonOutlinedIcon
                    className="icon"
                    style={{
                      color: 'crimson',
                      backgroundColor: 'rgba(255, 0, 0, 0.2)',
                    }}
                  />
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              {/* clients */}
              <div className="widget">
                <div className="left">
                  <span className="title">CLIENTS</span>
                  <span className="counter">
                    <CountUp duration={5} end={clients.length} />
                  </span>
                  <NavLink
                    to="/client"
                    style={{ color: 'black', textDecoration: 'none' }}
                    className="admin_link"
                  >
                    <span className="link">See all clients</span>
                  </NavLink>
                </div>
                <div className="right">
                  <div className="percentage positive"></div>
                  <PersonOutlinedIcon
                    className="icon"
                    style={{
                      color: 'purple',
                      backgroundColor: 'rgba(128, 0, 128, 0.2)',
                    }}
                  />
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              {/* service providers */}
              <div className="widget">
                <div className="left">
                  <span className="title">SERVICE PROVIDERS</span>
                  <span className="counter">
                    <CountUp duration={5} end={serviceproviders.length} />
                  </span>
                  <NavLink
                    to="/serviceprovider"
                    style={{ color: 'black', textDecoration: 'none' }}
                    className="admin_link"
                  >
                    <span className="link">See all service providers</span>
                  </NavLink>
                </div>
                <div className="right">
                  <div className="percentage positive"></div>
                  <PersonOutlinedIcon
                    className="icon"
                    style={{
                      color: 'purple',
                      backgroundColor: 'rgba(128, 0, 128, 0.2)',
                    }}
                  />
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              {/* appointments */}
              <div className="widget">
                <div className="left">
                  <span className="title">APPOINTMENTS</span>
                  <span className="counter">
                    <CountUp duration={5} end={appointments.length} />
                  </span>
                  <NavLink
                    to="/appointment"
                    style={{ color: 'black', textDecoration: 'none' }}
                    className="admin_link"
                  >
                    <span className="link">View all appointments</span>
                  </NavLink>
                </div>
                <div className="right">
                  <div className="percentage positive"></div>
                  <BookOnlineOutlinedIcon
                    className="icon"
                    style={{
                      backgroundColor: 'rgba(218, 165, 32, 0.2)',
                      color: 'goldenrod',
                    }}
                  />
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              {/* earnings */}
              <div className="widget">
                <div className="left">
                  <span className="title"> EARNINGS</span>
                  <span className="counter">
                    Rs <CountUp duration={5} end={sumEarning} />
                  </span>
                  <span className="link">View all earnings</span>
                </div>
                <div className="right">
                  <div className="percentage positive"></div>
                  <div className="percentage positive">
                    <MonetizationOnOutlinedIcon
                      className="icon"
                      style={{
                        backgroundColor: 'rgba(0, 128, 0, 0.2)',
                        color: 'green',
                      }}
                    />
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              {/* service providers */}
              <div className="widget">
                <div className="left">
                  <span className="title">SERVICE CATEGORIES</span>
                  <span className="counter">
                    <CountUp duration={5} end={categories.length} />
                  </span>
                  <NavLink
                    to="/category"
                    style={{ color: 'black', textDecoration: 'none' }}
                    className="admin_link"
                  >
                    <span className="link">See all service categories</span>
                  </NavLink>
                </div>
                <div className="right">
                  <div className="percentage positive"></div>
                  <CategoryOutlinedIcon
                    className="icon"
                    style={{
                      color: 'purple',
                      backgroundColor: 'rgba(128, 0, 128, 0.2)',
                    }}
                  />
                </div>
              </div>
            </Grid>
            {/* user list */}

          </Grid>
        </Container>
      </div>
    </>
  );
}

export default StatisticsPageComponent;
