import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Error() {
  const navigate = useNavigate();
  const time = 2000;

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, time);
  });

  return (
    <div id="ErrorDiv" className="h-96 ">
      <h1>Oops! Somethings went wrong. </h1>
      <p className="">
        No worries. You will be redirected to the previous page in {time / 1000}
        s
      </p>
    </div>
  );
}

export default Error;
