const HomePageStyle = (theme) => ({
  form: {
    margin: theme.spacing(14, 0),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(7, 0)
    }
  },
  textField: {
    width: '90%'
  },
  inputDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: theme.spacing(1, 0)
  },
  checkBox: {
    marginLeft: theme.spacing(2),
    fontSize: '8px'
  },
  submitButton: {
    width: '90%',
    backgroundColor: '#ef5350',
    textTransform: 'none',
    margin: '0 auto',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

export default HomePageStyle;
