import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 4000);
  });

  return (
    <div id="ErrorDiv">
      <h1>Oops! Somethings went wrong. </h1>
      <p>No worries. You will be redirected to the previous page in 4s</p>
    </div>
  );
}

export default Error;
