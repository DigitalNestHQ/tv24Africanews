import React, { useContext } from "react";
import authContext from "../../context/auth/authContext";
import "./header.css";

function TopNav(props) {
  const userContext = useContext(authContext)
  const { user } = userContext;
  // console.log(user)

  // const authContext = useContext(AuthContext);

  // useEffect(() => {
  //   // eslint-disable-next-line
  // }, []);

  const getDate = () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const day = date.getDate();
    let monthString;
    if(month === 1){
      monthString = "January"
    }else if(month === 2){
      monthString = "February"
    }
    else if(month === 3){
      monthString = "March"
    }
    else if(month === 4){
      monthString = "April"
    }
    else if(month === 5){
      monthString = "May"
    }
    else if(month === 6){
      monthString = "June"
    }
    else if(month === 7){
      monthString = "July"
    }
    else if(month === 8){
      monthString = "August"
    }
    else if(month === 9){
      monthString = "September"
    }
    else if(month === 10){
      monthString = "October"
    }
    else if(month === 11){
      monthString = "November"
    }
    else if(month === 12){
      monthString = "December"
    }
    return `${monthString} ${day}, ${year}`;
  };
  return (
    <div className="top-nav">
      <p className="text-white name-sp" style={{ marginBottom: "0px" }}>
        {" "}
        {
          user && user ? (
            <>
              <span>Welcome {user.firstname} {user.lastname}</span> <span>{getDate()}</span>
            </>
          ) :(
              <span>Welcome </span>
          )
        }
        {" "}
      </p>
      {/* <button onClick={()=>userContext.loadUser()}>Load User</button> */}
      {/* the weather repost component goes here */}
      <p className="text-white name-sp">
        <span>Weather:  Sunny : 23 <sup>degree</sup></span>
      </p>
      <ul className="soc-nav" style={{ marginBottom: "0px" }}>
        <li>
          <a href="/">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TopNav;
