import { Navigate } from "react-router-dom";

const Session = (props: any) => {
    if (props.loggedUser.Id == null) {
        return <Navigate to="/" replace />;
    }
    return null;
}

export default Session;