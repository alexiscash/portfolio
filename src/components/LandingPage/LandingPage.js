import React from 'react';

// import classnames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';

import Header from 'components/Header/Header.js';
// import HeaderLinks from 'components/Header/HeaderLinks.js';
import Footer from 'components/Footer/Footer.js';
import Parallax from 'components/Parallax/Parallax.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

import styles from 'assets/jss/material-kit-react/views/landingPage.js';
import image from 'assets/img/landing-bg.jpg';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Alexis Rangel"
        // rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{ height: 400, color: 'white' }}
        {...rest}
      />
      <Parallax filter image={image}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts Here.</h1>
              <h4>Description of the landing page.</h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Footer />
    </>
  );
}
