import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    detailMovie:{
        width:'100vw',
        position:'relative',
    },
    grid:{
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        top: '0%',
        width: '100%',
        height: '100%',
        color: 'white',
        display: "flex",
        paddingTop: '10rem',
    },

    backGround:{
        width:'100vw',
        height: '100%',
    },
    contImg:{
        width:'30%',
    },
    img:{
        width:'13rem',
        position: 'absolute',
        left: '0',
        marginLeft: '4%',
    },
    discMovie:{
        width:'50%',
    },
    prg:{
        width:'60%',
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