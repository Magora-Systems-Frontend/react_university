const styles = {
  container: (provided) => ({
    ...provided,
    border: '1px solid #686f7a',
    borderRadius: '3px',
    '&:hover, &:focus': {
      borderColor: '#29303b',
    },
    '&:active': {
      bgColor: '#f7f8fa',
    },
  }),
  control: (provided) => ({
    ...provided,
    border: 0,
    borderRadius: '3px',
    boxShadow: 'none',
    '&:hover': {
      border: 0,
    },
    '&:focus': {
      boxShadow: 'none',
    },
  }),
  menu: (provided) => ({
    ...provided,
    top: 'none',
    bottom: '100%',
    marginBottom: '1px',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    width: 0,
  }),
  indicatorsContainer: (provider) => ({
    ...provider,
    transform: 'rotate(180deg)',
  }),
};

export default styles;
