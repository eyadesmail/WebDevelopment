import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import Logo from "../photos/banner.jpg";


const useStyles = makeStyles({
    homePage: {
        background: '#e8ebed',
        minHeight: '100vh',
        paddingTop: '0',
        paddingLeft: '10rem',
        paddingRight:'10rem'
    },
    paragraph: {
        marginTop: '1rem'
    },
    bottompadding: {
        paddingBottom: '1rem',
    },
    leftbottom: {
        paddingLeft: '5rem',
        paddingBottom: '1rem'
    },
    aboutme: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        marginLeft: '5rem',
        marginRight: '5rem'
    },
});

export function HomePage() {
    const classes = useStyles();
    return (

        <div className={classes.homePage}>
            <div>
                <img src = {Logo} height = {'500rem'} width = '100%' />
            </div>

            <Typography variant={ 'h4' } style = {{paddingTop: '1rem'}}>
                About Me
            </Typography>

            <div className={classes.bottompadding}>


            <Typography className={classes.aboutme}  align={'justify'} >

                Motivated Computer Engineering Bachelor and a graduate of Computer Science who codes for the love of it!
                Constantly learning and growing is one of the few things that I look for in a Software Engineering position.
                I am currently capable of coding Swift, Java, C++, Python and I have had experience in Web Development, App Development,
                Arduino based projects, and MySql Database. One of my main career-related goals is growth, in terms of my skill set, responsibilities, and experience.
                I would also like to interact with all departments relevant in bringing a product to life, be it Marketing, Design, or even Sales.  I don't want to 'master'
                other people's roles, but I do believe gaining an insight in what drives their decision will in return allow me to make decisions that align with other departments' goals.




            </Typography>

            <Typography className={classes.bottompadding} variant={ "h6" } >
                Education:
            </Typography>

            <div className={classes.leftbottom}>
                <Typography variant={ 'body2' } >
                    B.S Electrical and Computer Engineering
                </Typography>
                <Typography variant={ 'body2' } >
                    University of New Haven
                </Typography>
                <Typography className={classes.bottompadding} variant={ 'body2' } >
                    2019
                </Typography>



                <Typography  variant={ 'body2' } >
                    M.S Computer Science
                </Typography>
                <Typography variant={ 'body2' } >
                    University of New Haven
                </Typography>
                <Typography variant={ 'body2' } >
                    Expected 2021
                </Typography>

            </div>


            <Typography variant={ 'h6' }>
            Projects
            </Typography>

            <div className={classes.leftbottom}>
                <Typography variant={ 'body1' }>
                    Senior Design:
                </Typography>

                <Typography variant={ 'body2' }>
                    Trinity College Fire Fighting Robot Competition
                </Typography>
            </div>


            </div>


        </div>
    )
}