import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h2>Page not found</h2>
      <p>We are sorry, the page you are looking for does not exist.</p>
      <p>Please check the URL and try again.</p>
      <p>{error?.error?.message}</p>
    </div>
  );
};
export default Error;
