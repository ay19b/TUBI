import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
    navbar:{
        paddingTop: "15px !important",
    },
    listNav:{
        alignItems: 'center',
    },
    logo:{
        fontFamily: 'Sonsie One cursive',
    },
    leftSide:{
        display: "flex",
        alignItems: "center",
        color:"white",
        justifyContent: "space-around",
    },
    iconSearch:{
        color:"white",
        fontSize: "1.4rem",
    },
    rightSide:{
        display: "flex",
        justifyContent: "space-around",
    },
	btnRgst:{
        background:' white',
        border: 'none',
        color: 'black',
        fontWeight: 'bold',
        '&:hover':{
            background:'white', 
        }
    },
    btnSng:{
        color: 'white',
    },
}));

export default useStyles