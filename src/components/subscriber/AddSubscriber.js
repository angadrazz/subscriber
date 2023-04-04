import './AddSubscriber.css';

const AddSubscriber = () => {

        const onSubmitHandler = (events) => {
                events.preventDefault();

        }
        return (
                <div>
                        <form onSubmit={onSubmitHandler}>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text"></input>
                        <label htmlFor="pincode">Pincode</label>
                        <input id="pincode" type="number"></input>
                        <button type="submit">Add Subscriber</button>
                        </form>
                </div>

        )
}

export default AddSubscriber;