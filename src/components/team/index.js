import React, { useEffect } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import tm1 from "../../images/team/img-1.jpg";
import tm2 from "../../images/team/img-2.jpg";
import tm3 from "../../images/team/img-4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getAllUsers } from "../../Redux/actions/UserActions";
import { toast } from "react-toastify";

const TeamSection = (props) => {
  const dispatch = useDispatch();

  const { error, users, loading } = useSelector((state) => state.allUsers);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAllUsers());
  }, [dispatch, toast, error]);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="team-area clear-fix">
      <div className="container">
        <div className="col-12">
          <div className="hx-site-title-1 text-center">
            <span>Meet Our Expertise</span>
            <h2>Our Awesome Team</h2>
          </div>
        </div>
        <div className="row">
          {users?.map((team, titem) => (
            <div className="col-lg-4 col-md-6 col-12" key={titem}>
              <div className="teams teams--two">
                <img
                  style={{ height: 480 }}
                  src={team.avatar.url}
                  className="img-responsive imageDimensions"
                  alt="Team"
                />
                <span className="teams--two__rect"></span>
                <span className="teams--two__tri"></span>
                <p>
                  <Link onClick={ClickHandler} to="/team">
                    {team.name}
                  </Link>
                </p>
                <ul className="teams__list">
                  <li>
                    <Link onClick={ClickHandler} to="/team">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/team">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/team">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/team">
                      <i className="fa fa-pinterest" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
