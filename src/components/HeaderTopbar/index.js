import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listBusiness } from "../../Redux/actions/CompanyActions";
import Loading from "../More/Loader";

const HeaderTopbar = (props) => {
  const dispatch = useDispatch();

  const { error, company, loading } = useSelector(
    (state) => state.companyDetails
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    dispatch(listBusiness());
  }, [dispatch, error]);

  const objCompany = Object.assign({}, company);

  return (
    <div className={`hx-header-top-1 ${props.htClass}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-9 col-sm-12 col-12 col-lg-8 col-t">
            <ul className="d-flex account_login-area">
              <li>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                {objCompany[0]?.openingHours}
                {/* <span style={{ color: "red", fontWeight: "bold" }}>
                  {" "}
                  Closed
                </span> */}
              </li>
              <li>
                <i className="fa fa-map-marker"></i>
                {objCompany[0]?.location}
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12 col-12 col-lg-4 col-m">
            <ul className="d-flex header-social">
              <li>
                <a
                  href="https://m.facebook.com/login/?next=%2Fprofile.php%3Fid%3D100032396636634&refid=17"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rm_automotive5/?hl=en"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopbar;
