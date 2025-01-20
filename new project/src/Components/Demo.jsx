
import logo from '../assets/logo.jpeg';

const Demo = (props) => {
    return (
        <div>
            <h1>{props.page}</h1>
            <img src={logo} alt="sece logo" />
            <h1>{props.image}</h1>
        </div>
    );
}

export default Demo;
