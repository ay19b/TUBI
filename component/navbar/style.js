import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
    navbar:{
        padding: "15px 0 !important",
        position: "absolute",
        zIndex: "11",
        display: 'flex',
    },
    NavSearch:{
        display: 'flex',
        padding: "25px 0 !important",
        zIndex: "11",
        position: "relative",
        marginBottom: '8%',
    },
    active:{
        position: 'fixed',
        zIndex:'1001',
        width: '100%',
        background: '#10141f',
        paddingTop: '15px !important',
        animationName: '$scrollNav',
        animationDuration: '.4s',
    },
    ActiveSearch:{
        width: '100%',
        zIndex: '1001',
        position: 'fixed',
        background: '#10141f',
        paddingTop:' 5px !important',
        animationName: '$scrollNav',
        animationDuration: ".4s",
        marginTop: "-5.8%",
    },
    '@keyframes scrollNav':{
        '0%' :{
          opacity: 0,
          transform: 'translateY(-60px)',
        },
        '100%' :{
          opacity: 1,
          transform: 'translateY(0)',
        },
    },
    listNav:{
        alignItems: 'center',
        position: "fixed"
    },
    listNavActive:{
        backgroundColor: 'black',
        paddingBottom: '2%',
        alignItems: 'center',
        position: "fixed"
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