import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
	footer:{
		backgroundColor: 'black',
		maxWidth: '1280px',
        margin: 'auto',
	},
	titleFooter:{
		color:'white'
	},
	nameSite:{
		fontFamily: 'Sonsie One cursive',
	},
	headFooter:{
		display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
		margin:'2rem 0 1rem 0'
	},
    icons:{
		display: 'flex',
        alignItems: 'center',
		listStyle:'none',
	},
	icon:{
		width: '30px',
        height: '30px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '3%',
        cursor: 'pointer',
		'&:hover':{
         color:'black',
		 backgroundColor:'white'
        }
	},
	headerList:{
		color:'white',
	},
	listItem:{
		listStyle:'none',
	},
	item:{
		marginBottom: '2%',
		color: '#bbb',
	},
	lastFooter:{
		textAlign: 'center',
		marginTop:'1%',
		color:'#aaa'
	},
	divider:{
		background: '#5b5b5b',
        width: '100%',
	},
}));

export default useStyles