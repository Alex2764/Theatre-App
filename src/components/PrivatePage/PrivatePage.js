import { isAuth } from "../../hoc/isAuth";

const PrivatePage = ({
    user
}) => {
    return (
        <h1 style={{color:'white'}}>This is private info for {user}</h1>
    );
};

export default isAuth(PrivatePage);