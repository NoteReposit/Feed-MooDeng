import mooDengImage from '../images/mooDeng.jpg';
import myselfImage from '../images/myself.jpg';

const MooDengFunc = ({ size, mooDengLevel }) => {
  return (
    <div className="text-center">
      <img
        src={mooDengLevel <= 100 ? mooDengImage : myselfImage}
        alt="Moo Deng"
        className="img-fluid rounded-3"
        style={{ width: `${size + mooDengLevel}px` }}
      />
    </div>
  );
};

export default MooDengFunc;