import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
    movies:{
        marginBottom: '2%',
    },
    product:{
        height:'23rem',
        margin: '3% 8% 1% 0%',
        color:'white',
        position: 'relative',
        cursor:'pointer',
    },
    playMovie:{
        position: 'relative',
        textAlign: 'center',
        height: '19rem',
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
    star:{
        color:'#fb590b',
    },
	headProdRight:{
        display: 'flex',
        alignItems: 'center',
        color: 'white',
    },
    swiperSlide:{
        flexShrink: '0',
        width: '100%',
        height: '100%',
        position: 'relative',
        transitionProperty: 'transform',
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