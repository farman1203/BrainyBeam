import { Link } from 'react-router-dom';

function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Orbit Labs home">
      <span className="brand-mark" aria-hidden="true">O</span>
      <span className="brand-name" aria-hidden="true">
        ORBIT<span>LABS</span>
      </span>
    </Link>
  );
}

export default Brand;
