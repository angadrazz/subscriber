import Container from '../templates/Container';
import '../subscriber/AddSubscriber.css';
const AddSubscriber = (props) => {

        const onSubmitHandler = (events) => {
                events.preventDefault();

        }
        return (
                <div>
                        <form onSubmit={onSubmitHandler}>
                        <Container className="input">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text"></input>
                        <label htmlFor="pincode">Pincode</label>
                        <input id="pincode" type="number"></input>
                        <button type="submit">Add Subscriber</button>
                        </Container>
                        </form>
                </div>

        )
}

export default AddSubscriber;