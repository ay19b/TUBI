import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
    detailMovie:{
        width:'100vw',
        height:'100vh'
    },
    grid:{
        display:'flex'
    },
    backGround:{
        width:'100vw',
    },
    img:{
        width:'13rem',
        position: 'absolute',
        left: '0',
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

export default useStyles;



