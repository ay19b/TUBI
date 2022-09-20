import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
    banner:{
        width:'100%',
        height:'32rem',
        position: 'relative',
        marginBottom: '1.5rem',
    },
    img:{
        height:'100%',
        width:'100%',
        objectFit: 'cover',
        objectPosition: '0% 20%',
    },
    grid:{
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        top: '0%',
        width: '100%',
        height: '100%',
        color: 'white',
        paddingTop: '8rem',
        paddingLeft: '5%',
    },
    btn:{
        width: '10rem',
        height: '2rem',
        backgroundColor: '#b00940',
        color: 'white',
        border: 'none',
        '&:hover':{
            cursor:'pointer',
            backgroundColor: '#A00940',
        }
    },
    disc:{
        width: '60%',
        fontSize: '1.15rem',
    },
}));

export default useStyles