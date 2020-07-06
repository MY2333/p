import PropTypes from 'prop-types';

function check(count){
  if(count%2===0){
    return true
  }return false
}
check.propTypes = {
  count: PropTypes.number
};

check.defaultProps = {
  count: 0
};

export default check;
