import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Lottie from 'lottie-react';
import homeAnim from '../images/animation/homeAnim.json';
import CustomIcon from '../components/CustomIcon';

const Home = () => {
  const isMdScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isMd = useMediaQuery((theme) => theme.breakpoints.only('md'));

  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  console.log(isHamburgerClicked);

  return (
    <Box sx={{ minHeight: isMdScreen ? '100vh' : '100dvh' }}>
      {/* Navbar */}
      <Navbar
        isHamburgerClicked={isHamburgerClicked}
        setIsHamburgerClicked={setIsHamburgerClicked}
      />

      {isHamburgerClicked && !isMdScreen && (
        <Slide
          direction={'down'}
          timeout={{ enter: 500, exit: 500 }}
          in={isHamburgerClicked}
          mountOnEnter
          unmountOnExit
        >
          <Box
            sx={{
              minHeight: '15dvh',
              mt: '75px',
              boxShadow: '0px 0px 22px -1px rgba(0, 0, 0, 0.09)',
              borderRadius: '10px',
            }}
          >
            <List sx={{ p: 0 }}>
              <ListItemButton>
                <ListItemText
                  primary='Home'
                  sx={{
                    color: '#147F82',
                    fontWeight: '900',
                    cursor: 'pointer',
                    fontSize: '16px',
                  }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary='Gallery' />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary='Services' />
              </ListItemButton>
            </List>
          </Box>
        </Slide>
      )}

      <Box
        sx={{
          pl: isMdScreen ? '80px' : '20px',
          pr: isMdScreen ? '80px' : '20px',
        }}
      >
        {/* Book Text & Lottie */}
        <Grid
          container
          sx={{
            pt: isHamburgerClicked && !isMdScreen ? '20px' : '150px',
          }}
          direction={isMdScreen ? 'row' : 'column-reverse'}
          justifyContent={isMdScreen && 'space-between'}
          alignItems={'center'}
        >
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMdScreen ? 'flex-start' : 'center',
              pt: '20px',
            }}
            md={6}
          >
            <Typography
              sx={{
                color: '#147F82',
                fontWeight: 600,
                fontSize: isMd ? '15px' : isMdScreen ? '26px' : '16px',
              }}
            >
              Your Skin, Our Care: Real Results
            </Typography>
            <Typography
              sx={{
                color: '#464646',
                fontSize: isMd ? '20px' : isMdScreen ? '36px' : '18px',
                fontWeight: 600,
              }}
            >
              Discover Your True Beauty at
            </Typography>
            <Typography
              sx={{
                color: '#464646',
                fontSize: isMd ? '20px' : isMdScreen ? '38px' : '18px',
                fontWeight: 600,
              }}
            >
              Namratha's Skin, Hair, and
            </Typography>
            <Typography
              sx={{
                color: '#464646',
                fontSize: isMd ? '20px' : isMdScreen ? '36px' : '18px',
                fontWeight: 600,
              }}
            >
              Laser Clinic
            </Typography>

            <Button
              sx={{
                mt: '10px',
                width: isMd ? '100px' : isMdScreen ? '165px' : '120px',
                height: isMd ? '40px' : isMdScreen ? '50px' : '50px',
                color: '#FFF',
                borderRadius: '50px',
                bgcolor: '#147F82',
                textTransform: 'capitalize',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#147F82',
                  color: '#FFF',
                },
                fontSize: isMd ? '15px' : isMdScreen ? '20px' : '15px',
                fontWeight: 600,
                border: 0,
              }}
            >
              Book
            </Button>
          </Grid>
          <Grid item sx={{ width: isMdScreen ? '50%' : '100%' }} md={6}>
            <Lottie animationData={homeAnim} loop={false} autoplay={true} />
          </Grid>
        </Grid>

        {/* Welcome */}
        <Grid
          container
          sx={{
            pl: isMdScreen ? '80px' : '20px',
            pr: isMdScreen ? '80px' : '20px',
            bgcolor: '#D5EDED',
            mt: '20px',
            pb: isMdScreen ? '40px' : '20px',
            pt: isMdScreen ? '40px' : '20px',
            width: '100%',
            borderRadius: '11px',
            display: 'flex',
            flexDirection: isMdScreen ? 'row' : 'column',
            alignItems: 'center',
            justifyContent: isMdScreen && 'space-between',
          }}
        >
          <Grid item md={5}>
            <CustomIcon
              name={'doctor'}
              style={{ width: '100%', height: '285px' }}
              svgStyle={'width: 100%; height: 285px'}
            />
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: !isMdScreen && 'center',
            }}
            md={7}
          >
            <Typography
              sx={{
                fontSize: isMd ? '16px' : isMdScreen ? '24px' : '16px',
                color: '#373737',
                fontWeight: 500,
                fontFamily: 'mukta',
              }}
            >
              Welcome to
            </Typography>
            <Typography
              sx={{
                fontSize: isMd ? '18px' : isMdScreen ? '32px' : '18px',
                color: '#373737',
                fontWeight: 600,
                fontFamily: 'mukta',
              }}
            >
              Dr. NAMRATHA SKIN CARE
            </Typography>
            <Typography
              sx={{
                fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                color: '#373737',
                fontWeight: 500,
                fontFamily: 'mukta',
              }}
            >
              Our story begins with Dr. Namratha, a dermatologist with a passion
              for helping people look and feel their best. In 2005, her
              fascination with the human skin's incredible ability to heal and
              rejuvenate itself led her to envision a place where cutting-edge
              technology and a holistic approach to skincare would come
              together. The journey towards creating this haven of skincare
              excellence started in 1990.
            </Typography>
            <Typography
              sx={{
                fontSize: isMd ? '14px' : isMdScreen ? '20px' : '14px',
                color: '#147F82',
                fontWeight: 600,
                fontFamily: 'mukta',
                cursor: 'pointer',
                mt: '10px',
              }}
            >
              Read More
            </Typography>
          </Grid>
        </Grid>

        {/* Special Features */}
        <Grid
          container
          sx={{
            pl: '20px',
            pr: '20px',
            mt: '20px',
            display: 'flex',
            flexDirection: isMdScreen ? 'row' : 'column',
            alignItems: 'center',
            justifyContent: isMdScreen && 'space-between',
          }}
        >
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: !isMdScreen && 'center',
            }}
            md={7}
          >
            <Typography
              sx={{
                fontFamily: 'moneta',
                fontWeight: 900,
                fontSize: isMd ? '18px' : isMdScreen ? '32px' : '18px',
                color: '#242424',
              }}
            >
              Special Features
            </Typography>
            <Typography
              sx={{
                fontFamily: 'mukta',
                fontWeight: 500,
                fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                color: '#4B4B4B',
              }}
            >
              Narmatha’s skin, hair and laser clinic provides equal importance
              to clinical dermatology and the science behind aesthetic and
              cosmetic dermatology. Hence when it comes to aesthetic practise
              the treatment will be titrated according to individual needs and
              When you choose Narmatha's Skin, Hair, and Laser Clinic, you can
              trust that you are in capable hands. We are committed to
              delivering exceptional results while ensuring your comfort and
              safety throughout your journey with us. Take the first step
              towards achieving your best skin and hair. Contact us today to
              schedule a consultation and let us help you unlock your natural
              beauty."
            </Typography>
          </Grid>
          <Grid item md={5}>
            <CustomIcon
              name={'animDoc'}
              style={{ width: '100%', height: '329px' }}
              svgStyle={'width: 100%; height: 329px'}
            />
          </Grid>
        </Grid>

        {/* Our Services */}
        <Grid
          container
          flexDirection={!isMdScreen && 'column'}
          alignItems={!isMdScreen && 'center'}
          sx={{
            borderRadius: '10px',
            boxShadow: '0px 0px 22px -1px rgba(0, 0, 0, 0.09)',
            pt: isMdScreen ? '20px' : '10px',
            pb: isMdScreen ? '20px' : '10px',
          }}
        >
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Typography
              sx={{
                fontFamily: 'moneta',
                fontWeight: 900,
                fontSize: isMd ? '18px' : isMdScreen ? '32px' : '18px',
                color: '#242424',
                textAlign: 'center',
              }}
            >
              Our Services
            </Typography>
          </Box>
          <Grid container flexDirection={'row'} justifyContent={'space-evenly'}>
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              md={4}
              p={1}
            >
              <CustomIcon
                name={'clinicalDerma'}
                style={{ width: '100%', height: '218px' }}
                svgStyle={'width: 100%; height: 218px'}
              />
              <Typography
                sx={{
                  pb: isMd ? '0px' : !isMdScreen ? '5px' : '20px',
                  pt: isMd ? '0px' : !isMdScreen ? '5px' : '20px',
                  fontFamily: 'mukta',
                  fontWeight: 500,
                  fontSize: isMd ? '14px' : isMdScreen ? '20px' : '14px',
                  color: '#242424',
                }}
              >
                Clinical Dermatology
              </Typography>
            </Grid>
            <Grid
              item
              md={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              p={1}
            >
              <CustomIcon
                name={'interThera'}
                style={{ width: '100%', height: '218px' }}
                svgStyle={'width: 100%; height: 218px'}
              />
              <Typography
                sx={{
                  pb: isMd ? '0px' : !isMdScreen ? '5px' : '20px',
                  pt: isMd ? '0px' : !isMdScreen ? '5px' : '20px',
                  fontFamily: 'mukta',
                  fontWeight: 500,
                  fontSize: isMd ? '14px' : isMdScreen ? '20px' : '14px',
                  color: '#242424',
                }}
              >
                Interventional Therapies
              </Typography>
            </Grid>
            <Grid
              item
              md={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              p={1}
            >
              <CustomIcon
                name={'skinReju'}
                style={{ width: '100%', height: '218px' }}
                svgStyle={'width: 100%; height: 218px'}
              />
              <Typography
                sx={{
                  pb: isMd ? '0px' : !isMdScreen ? '5px' : '20px',
                  pt: isMd ? '0px' : !isMdScreen ? '5px' : '20px',
                  fontFamily: 'mukta',
                  fontWeight: 500,
                  fontSize: isMd ? '14px' : isMdScreen ? '20px' : '14px',
                  color: '#242424',
                }}
              >
                Skin Rejuvenation Therapies
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Button
              sx={{
                mt: '10px',
                width: '114px',
                height: '44px',
                color: '#147F82',
                borderRadius: '50px',
                bgcolor: 'transparent',
                textTransform: 'capitalize',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#FFF',
                  color: '#147F82',
                },
                fontSize: '15px',
                fontWeight: 600,
                border: '1px solid #147F82',
                fontFamily: 'mukta',
              }}
            >
              See All
            </Button>
          </Box>
        </Grid>

        {/* About Us*/}
        <Grid
          container
          sx={{ mt: '20px', pr: '20px', pl: '20px' }}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Typography
            sx={{
              fontFamily: 'moneta',
              fontWeight: 900,
              fontSize: isMd ? '18px' : isMdScreen ? '32px' : '18px',
              color: '#242424',
            }}
          >
            About Us
          </Typography>
          <Grid
            container
            flexDirection={isMdScreen ? 'row' : 'column'}
            alignItems={isMdScreen && 'center'}
          >
            <Grid item sx={{ pt: '10px', pb: '10px' }} md={5}>
              <CustomIcon
                name={'threeDoc'}
                style={{ width: '100%', height: '250px' }}
                svgStyle={'width: 100%; height: 250px'}
              />
            </Grid>
            <Grid item md={7}>
              <Typography
                sx={{
                  fontFamily: 'mukta',
                  fontWeight: 500,
                  fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                  color: '#4B4B4B',
                }}
              >
                Welcome to Namratha's Skin, Hair, and Laser Clinic, where
                advanced technologies meet evidence-based skin care and
                treatments. At our clinic, we are passionate about helping you
                achieve healthy, radiant skin and beautiful hair. With a team of
                highly skilled professionals, we specialize in providing
                cutting-edge solutions and personalized care to address a wide
                range of skin concerns. From acne and aging signs to hair loss
                and unwanted hair, we offer innovative treatments tailored to
                your individual needs.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Visit Us Mobile */}
        <Grid
          container
          display={isMdScreen && 'none'}
          flexDirection={'column'}
          sx={{ mt: '20px', pr: '20px', pl: '20px' }}
          gap={2}
        >
          <Typography
            sx={{
              textAlign: 'center',
              fontFamily: 'moneta',
              fontWeight: 900,
              fontSize: '18px',
              color: '#242424',
            }}
          >
            Visit Us
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontFamily: 'mukta',
              fontWeight: 500,
              fontSize: '14px',
              color: '#4B4B4B',
            }}
          >
            Request you to please contact us on the below mentioned address and
            other details
          </Typography>
          <Grid container flexDirection={'column'} gap={2}>
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                borderRadius: '10px',
              }}
              xs={12}
              md={6}
            >
              <Grid
                item
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                xs={7}
              >
                <Typography
                  sx={{
                    fontFamily: 'mukta',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: '#147F82',
                  }}
                >
                  Call Us
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'mukta',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#565656',
                    textDecoration: 'underline',
                  }}
                >
                  +91 7010620895
                </Typography>
              </Grid>
              <Grid
                item
                xs={5}
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <CustomIcon
                  name={'phone'}
                  style={{ width: '100%', height: '100px' }}
                  svgStyle={'width: 100%; height: 100px'}
                />
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                borderRadius: '10px',
              }}
              xs={12}
              md={6}
            >
              <Grid
                item
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                xs={7}
              >
                <Typography
                  sx={{
                    fontFamily: 'mukta',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: '#147F82',
                  }}
                >
                  Email Us
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'mukta',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#565656',
                  }}
                >
                  namrta@clinic.com
                </Typography>
              </Grid>
              <Grid
                item
                xs={5}
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <CustomIcon
                  name={'post'}
                  style={{ width: '100%', height: '100px' }}
                  svgStyle={'width: 100%; height: 100px'}
                />
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '10px',
                boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                p: '20px',
              }}
              minHeight={'30dvh'}
              xs={12}
              md={6}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'mukta',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: '#147F82',
                  }}
                >
                  Our Address
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'mukta',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#4B4B4B',
                    pt: '10px',
                  }}
                >
                  Narmatha's skin, Hair and Laser Clinic
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'mukta',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#4B4B4B',
                  }}
                >
                  No. 15, Narayana Nagar
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'mukta',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#4B4B4B',
                  }}
                >
                  Pillayar Palayam
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'mukta',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#4B4B4B',
                  }}
                >
                  Dindigul-624001
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: '20px',
                  border: '1px solid red',
                  borderRadius: '10px',
                  flexGrow: 1,
                }}
              ></Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Visit Us Desktop */}
        <Grid
          container
          flexDirection={'column'}
          display={!isMdScreen && 'none'}
        >
          <Typography
            sx={{
              fontFamily: 'moneta',
              fontWeight: 900,
              fontSize: isMd ? '18px' : isMdScreen ? '32px' : '18px',
              color: '#242424',
              textAlign: 'center',
            }}
          >
            Visit Us
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              pb: '20px',
              fontFamily: 'mukta',
              fontWeight: 500,
              fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
              color: '#4B4B4B',
            }}
          >
            Request you to please contact us on the below mentioned address and
            other details
          </Typography>

          <Grid
            container
            flexDirection={'row'}
            justifyContent={'space-between'}
            sx={{ height: '40vh' }}
          >
            <Grid
              item
              md={5.8}
              display={'flex'}
              flexDirection={'column'}
              sx={{
                height: '100%',
              }}
            >
              <Box
                sx={{
                  height: '50%',
                  display: 'flex',
                  flexDirection: 'row',
                  borderRadius: '12px',
                  mb: '20px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                <Box
                  sx={{
                    width: '70%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'mukta',
                      fontWeight: 600,
                      fontSize: isMd ? '16px' : isMdScreen ? '20px' : '18px',
                      color: '#147F82',
                    }}
                  >
                    Call Us
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'mukta',
                      fontWeight: 500,
                      fontSize: isMd ? '16px' : isMdScreen ? '20px' : '18px',
                      color: '#565656',
                      textDecoration: 'underline',
                    }}
                  >
                    +91 7010620895
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: '30%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}
                >
                  <CustomIcon
                    name={'phone'}
                    style={{ width: '100%', height: '100px' }}
                    svgStyle={'width: 100%; height: 100px'}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  height: '50%',
                  display: 'flex',
                  flexDirection: 'row',
                  borderRadius: '12px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                <Box
                  sx={{
                    width: '70%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'mukta',
                      fontWeight: 600,
                      fontSize: isMd ? '16px' : isMdScreen ? '20px' : '18px',
                      color: '#147F82',
                    }}
                  >
                    Email Us
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'mukta',
                      fontWeight: 500,
                      fontSize: isMd ? '16px' : isMdScreen ? '20px' : '18px',
                      color: '#565656',
                    }}
                  >
                    namrta@clinic.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: '30%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}
                >
                  <CustomIcon
                    name={'post'}
                    style={{ width: '100%', height: '100px' }}
                    svgStyle={'width: 100%; height: 100px'}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                height: '100%',
                borderRadius: '12px',
                p: '20px',
                boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
              }}
              display={'flex'}
              flexDirection={'column'}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'mukta',
                    fontWeight: 600,
                    fontSize: isMd ? '16px' : isMdScreen ? '20px' : '18px',
                    color: '#147F82',
                  }}
                >
                  Our Address
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'mukta',
                    fontWeight: 500,
                    fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                    color: '#4B4B4B',
                  }}
                >
                  Narmatha's skin, Hair and Laser Clinic
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'mukta',
                    fontWeight: 500,
                    fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                    color: '#4B4B4B',
                  }}
                >
                  No. 15, Narayana Nagar
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'mukta',
                    fontWeight: 500,
                    fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                    color: '#4B4B4B',
                  }}
                >
                  Pillayar Palayam
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'mukta',
                    fontWeight: 500,
                    fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                    color: '#4B4B4B',
                  }}
                >
                  Dindigul-624001
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  border: '1px solid orange',
                  mt: '20px',
                  flexGrow: 1,
                  borderRadius: '10px',
                }}
              ></Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Grid
        container
        sx={{
          pl: '20px',
          pr: '20px',
          mt: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
          pb: '20px',
        }}
      >
        <Grid
          item
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CustomIcon
            name={'namratha'}
            style={{
              width: '150px',
              height: '42px',
              cursor: 'pointer',
              marginTop: '20px',
              marginBottom: '10px',
            }}
            svgStyle={'width: 150px; height: 42px'}
          />
        </Grid>
        <Divider sx={{ height: '1px', bgcolor: '#BBBBBB', width: '100%' }} />
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: '10px',
            pb: '10px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'mukta',
              fontWeight: 500,
              fontSize: isMd ? '18px' : isMdScreen ? '22px' : '18px',
              color: '#242424',
            }}
          >
            Opening Hours
          </Typography>
          <Typography
            sx={{
              fontFamily: 'mukta',
              fontWeight: 500,
              fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
              color: '#4B4B4B',
            }}
          >
            Weekdays: 10AM -10PM
          </Typography>
          <Typography
            sx={{
              fontFamily: 'mukta',
              fontWeight: 500,
              fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
              color: '#4B4B4B',
            }}
          >
            Saturday, Sunday: 10AM - 8PM
          </Typography>
        </Grid>
        <Divider
          sx={{ height: '1px', bgcolor: '#BBBBBB', width: '100%', mb: '10px' }}
        />
        <Grid
          container
          flexDirection={isMdScreen ? 'row' : 'column'}
          alignItems={!isMdScreen && 'center'}
          pt={'10px'}
        >
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: isMdScreen ? 'row' : 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  textDecoration: 'underline',
                  fontFamily: 'mukta',
                  fontWeight: 500,
                  fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                  color: '#4B4B4B',
                  cursor: 'pointer',
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                sx={{
                  textAlign: 'center',
                  textDecoration: 'underline',
                  fontFamily: 'mukta',
                  fontWeight: 500,
                  fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                  color: '#4B4B4B',
                  cursor: 'pointer',
                }}
              >
                Terms of Service
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                textAlign: 'center',
                fontFamily: 'mukta',
                fontWeight: 500,
                fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                color: '#4B4B4B',
              }}
            >
              ©2022, All right reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: !isMdScreen && 'none' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <CustomIcon
                name={'facebook'}
                style={{
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  marginRight: '12px',
                }}
                svgStyle={'width: 24px; height: 24px'}
              />
              <CustomIcon
                name={'instagram'}
                style={{
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  marginRight: '12px',
                }}
                svgStyle={'width: 24px; height: 24px'}
              />
              <CustomIcon
                name={'twitter'}
                style={{
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  marginRight: '12px',
                }}
                svgStyle={'width: 24px; height: 24px'}
              />
              <CustomIcon
                name={'linkedin'}
                style={{
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  marginRight: '12px',
                }}
                svgStyle={'width: 24px; height: 24px'}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          flexDirection={'row'}
          justifyContent={'center'}
          p={'10px'}
          sx={{ display: isMdScreen && 'none' }}
        >
          <CustomIcon
            name={'facebook'}
            style={{
              width: '24px',
              height: '24px',
              cursor: 'pointer',
              marginRight: '12px',
            }}
            svgStyle={'width: 24px; height: 24px'}
          />
          <CustomIcon
            name={'instagram'}
            style={{
              width: '24px',
              height: '24px',
              cursor: 'pointer',
              marginRight: '12px',
            }}
            svgStyle={'width: 24px; height: 24px'}
          />
          <CustomIcon
            name={'twitter'}
            style={{
              width: '24px',
              height: '24px',
              cursor: 'pointer',
              marginRight: '12px',
            }}
            svgStyle={'width: 24px; height: 24px'}
          />
          <CustomIcon
            name={'linkedin'}
            style={{
              width: '24px',
              height: '24px',
              cursor: 'pointer',
              marginRight: '12px',
            }}
            svgStyle={'width: 24px; height: 24px'}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
