const showName = string => {
  if (string === 'TOS') {
    return 'Star trek - The Original Series';
  } if (string === 'TNG') {
    return 'Star trek - The Next Generation';
  } if (string === 'VOY') {
    return 'Star trek - Voyager';
  } if (string === 'DS9') {
    return 'Star trek - Deep Space 9';
  } if (string === 'ENT') {
    return 'Star trek - Enterprise';
  } if (string === 'DIS') {
    return 'Star trek - Dscovery';
  }
  return 0;
};

export default showName;
