const styles = {
  container: (provided) => ({
    ...provided,
    border: '1px solid #686f7a',
    borderRadius: '3px',
    width: '160px',
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
    bgColor: '#fff',
    boxShadow: '0 4px 16px rgba(20,23,28,.25)',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    width: 0,
  }),
  indicatorsContainer: (provider) => ({
    ...provider,
    transform: 'rotate(180deg)',
  }),
  option: (provider, state) => ({
    ...provider,
    backgroundColor: 'transparent',
    color: '#505763',
    '&:hover': {
      backgroundColor: '#f2f3f5',
      cursor: 'pointer',
    },
  }),
};

export default styles;
