import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
    detailSearch:{
        width:'100vw',
        position:'relative',
        marginTop: '4rem',
    },
    search:{
        position: 'absolute',
    },
    searchCont:{
        marginTop: '10%',
    },
    List:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    movies:{
        marginBottom: '2%',
    },
    product:{
        height:'23rem',
        width: '15rem',
        color:'white',
        position: 'relative',
        cursor:'pointer',
    },
    playMovie:{
        position: 'relative',
        textAlign: 'center',
        height: '19rem',
        width: '15rem',
    },
    iconPlay:{
        fontSize: '4rem',
        position: 'absolute',
        top: '30%',
        width: '100%',
        left:'0%',
        display:'none',
    },
    add:{
        position: 'absolute',
        bottom: '0',
        width: '97%',
        background: '#313131',
        margin:'1%',
        display:'none',
    },
    img:{
        width: '100%',
        height: '100%',
        '&:hover':{
            transform: 'scale(1.03,1.03)',
        },
    },
    genre:{
        color:'white',
    },
    title:{
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        '&:hover':{
            color:'orange',  
        },
    },
	headProdRight:{
        display: 'flex',
        alignItems: 'center',
        color: 'white',
    },
    icon:{
        display: 'flex',
    },
    divider:{
		background: '#5b5b5b',
        width: '100%',
	},
}));

export default useStyles