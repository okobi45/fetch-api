import { makeStyles } from '@material-ui/core'
import { Button, Modal, Typography } from '@mui/material'
import { Container} from '@mui/system'
import React from 'react'


const useStyles = makeStyles((theme)=>({
   
    modalContainer:{
        position:"absolute",
        backgroundColor:"white",
        top:"20%",
        bottom:"20%",
        right:"35%",
        left:"35%",
        borderRadius:"20px",
        [theme.breakpoints.down("sm")]:{
            position:"absolute",
            right:"10%",
            left:"10%", 
        }
    },

    button:{
        background: "#3bbab9",

        "&:hover": {
            background: "red",
        },
    }
    }))



function Login({login, setLogin}) {
    const classes = useStyles()

  return (
    <Modal open={login}  className={classes.modalContainer}>
      <Container c>
      <Typography variant="h4">
      Login
    </Typography>
    <Button variant="contained" className={classes.button}  onClick={()=>setLogin(false)}>&times;</Button>
      
      </Container> 
    </Modal>
  )
}

export default Login