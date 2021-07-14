const DetailPageStyle = (theme) => ({
  wrapper: {
    margin: theme.spacing(4, 0)
  },
  textField: {
    width: '90%'
  },
  inputDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: theme.spacing(1, 'auto')
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  }
});

export default DetailPageStyle;
