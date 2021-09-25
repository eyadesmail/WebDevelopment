import React,  {  useRef  }  from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography , TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import axios from 'axios';


const useStyles = makeStyles({
    contactme: {
        background: '#e8ebed',
        minHeight: '100vh',
        paddingTop: '100px',
        paddingLeft: '10rem',
        paddingRight:'10rem'
    },
    errors:{
        paddingTop: '1rem',
        color: '#e00719',
        fontSize: "large",
        textAlign: "center"
    },
    buttoncontainter:{
        paddingTop: '1rem',
        display: 'flex',
        justifycontent: 'flex-end',
        alignItems: 'flex-end'
    },
    buttonStyle : {
        flex: 1,
        paddingTop: '0.3rem'
    },
    distancing: {
        paddingBottom: '1rem'
    }

});

export function ContactPage() {
    const classes = useStyles();

    const [ errormessage, seterrormessage] = React.useState("");


    let emailInput = useRef(null);
    let messageInput = useRef(null);


    function emailValidate(email){
        let emailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailformat.test(email)){
            return true;
        }else {
            return false;
        }
    }
    function messageValidate(message){
        if (message == ""){
            return false;
        }else {
            return true;
        }
    }

    function handleSubmit() {

        let emailin =  emailInput.current.value
        let messagetxt =  messageInput.current.value
        let evalidity = emailValidate(emailin);
        let mvalidity = messageValidate(messagetxt);

        if (evalidity == true && mvalidity == true){
            const mydata = {
                emailaddress: emailin,
                messagetext: messagetxt
            };

            console.log(mydata)

            axios({
                url:'/mydb',
                method: 'POST',
                data: mydata
            })
                .then(()=>{
                    console.log('Data Sent');
                    alert("Message Submitted.")

                })
                .catch(() => {
                    console.log('error');

                });
            seterrormessage("")
            emailInput.current.value = "";
            messageInput.current.value = "";
        } else if (evalidity == false && mvalidity == false ) {
            seterrormessage("Error: invalid email and message formats ! ")
           // alert("invalid email and message formats  ")
            emailInput.current.value = "";
            messageInput.current.value = "";

        } else if (evalidity == false){
            seterrormessage("Error: Incorrect email format! ")
           // alert('incorrect email format')
            emailInput.current.value = "";
        } else if (mvalidity == false){
            //alert('message can not be empty ')
            seterrormessage("Error: Message box can not be empty !")
        }
    }


    return (
        <div className={classes.contactme}>
            <Typography className={classes.distancing} variant={ 'h4' }>
                Contact Me!
            </Typography>

            <form>
                <TextField id="emailfield"  size={'small'} required={true} inputRef={emailInput} label="Email" variant="outlined" style = {{width: '40rem'}} className={classes.distancing}/>
                <TextField id="messagefield" required={true} fullWidth={true} rows ={5} inputRef={messageInput} multiline label="Message" variant="outlined"/>
            </form>

            <div className={classes.buttoncontainter}>
                <Button  disableElevation variant="contained" color={ 'inherit' } onClick={ handleSubmit } className={classes.buttonStyle} >
                    Submit
                </Button>
            </div>

            <div className={classes.errors} variant = {'h3'}>
                {errormessage}
            </div>


        </div>
    )
}
